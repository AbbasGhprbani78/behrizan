import React, { useEffect, useState } from 'react'
import './Section6.css'
import { Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import { useMyContext } from '../../../../context/langugaeContext';
import { IP } from '../../../../App';
import axios from 'axios';
export default function Section6({ dataHome }) {
    const { language } = useMyContext()
    const { t } = useTranslation();
    const [socaial, setSocaial] = useState("");

    useEffect(() => {

        const getSocial = async () => {
            try {
                const response = await axios.get(`${IP}/home/footer/`)

                if (response.status === 200) {
                    setSocaial(response.data)
                }

            } catch (e) {
                console.log(e)
            }
        }
        getSocial()
    }, [])

    return (
        <>
            <div className={`section6-wrapper ${language === "fa" && "rtl"}`}>
                <Col xs={12} md={6} className="section6-left">
                    <img src={`${IP}${dataHome.image_three}`} alt="" />
                </Col>
                <Col xs={12} md={6} className="section6-right">
                    <p className="Qcafe-title">
                        {
                            language === "fa" ?
                                dataHome.header_text_four_farsi :
                                dataHome?.header_text_four}
                    </p>
                    <p className="Qcafe-text1 mt-2">
                        {
                            language === "fa" ?
                                dataHome.text_four_farsi :
                                dataHome?.text_four}
                    </p>
                    <p className="Qcafe-text2">
                        {language === "fa" ?
                            dataHome.last_text_farsi :
                            dataHome?.last_text}
                    </p>
                    <span className="qcafe-phone mt-2">
                        {socaial.whatsapp}
                    </span>
                </Col>
            </div>
        </>
    )
}
