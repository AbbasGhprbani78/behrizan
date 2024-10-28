import React, { useEffect, useState } from 'react'
import './Story.css'
import { Col } from 'react-bootstrap'
import { useMyContext } from '../../context/langugaeContext'
import { IP } from '../../App'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import Header from '../../Components/modules/Header/Header'
import Footer from '../../Components/modules/Footer/Footer'
import Lodaing from '../../Components/modules/Loading/Lodaing'
export default function Story() {

    const { language, socaial } = useMyContext()
    const [dataHome, setDataHome] = useState("")
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation()

    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    const toPersianDigits = (num) => {
        return num?.toString()?.replace(/\d/g, (x) => persianNumbers[parseInt(x)]);
    };

    useEffect(() => {
        const getInfoPage = async () => {
            const headers = {
                'Accept-Language': language
            };
            setLoading(true)

            try {
                const response = await axios.get(`${IP}/home/get-home-media`, {
                    headers,
                })

                if (response.status === 200) {
                    setDataHome(response.data[0])
                    setLoading(false)
                }

            } catch (e) {
                console.log(e)
                setLoading(false)
            }
        }
        getInfoPage()
    }, [language])

    const phoneNumber = language === 'fa' ? toPersianDigits(socaial?.phone_number) : socaial?.phone_number;
    return (

        <>
            {
                loading ?
                    <Lodaing /> :
                    <>
                        <Header />
                        <div className="main-content">
                            <div className={`story-container ${language === "fa" && "rtl"}`}>
                                <div className="background-story">
                                    <p className='about-us-title'>{t("about")}</p>
                                </div>
                                <div className="story-contents">
                                    <Col xs={12} md={8} className="story-content">
                                        <div className="story-header">
                                            <img src={`${IP}${socaial?.logo}`} alt="logo" />
                                            <p className='story-title'>
                                                {
                                                    language === "fa" ?
                                                        dataHome?.header_text_four_farsi :
                                                        dataHome?.header_text_four}
                                            </p>
                                        </div>
                                        {
                                            language === "fa" ?
                                                <p className="story-text">
                                                    {socaial?.about_farsi}
                                                </p> :
                                                <p className="story-text">
                                                    {socaial?.about}
                                                </p>
                                        }
                                    </Col>
                                    <Col xs={12} md={4} className="story-media">
                                        <div className="media-item">
                                            <CallOutlinedIcon style={{ color: "#274c77" }} />
                                            <p className='media-item-text'>{phoneNumber}</p>
                                        </div>
                                        <div className="media-item">
                                            <FmdGoodOutlinedIcon style={{ color: "#274c77" }} />
                                            {
                                                language === "fa" ?
                                                    <p className='media-item-text-address'>{socaial?.address_farsi}</p> :
                                                    <p className='media-item-text'>{socaial?.address}</p>
                                            }

                                        </div>
                                    </Col>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </>
            }

        </>
    )
}
