import React from 'react'
import './Section4.css'
import { Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useMyContext } from '../../../../context/langugaeContext';
import { IP } from '../../../../App';
export default function Section4({ dataHome }) {
    const { language } = useMyContext()
    const { t } = useTranslation();

    return (
        <>
            <div className={`section4-wrapper ${language === "fa" && "rtl"}`}>
                <Col xs={12} md={6} className="section4-left">
                    <p className="section4-title">
                        {language === "fa" ? dataHome.header_text_three_farsi :
                            dataHome?.header_text_three
                        }
                    </p>
                    <p className="section4-dec">
                        {
                            language === "fa" ? dataHome.text_three_farsi : dataHome?.text_three}
                    </p>
                </Col>
                <Col xs={12} md={6} className="section4-right">
                    <img src={`${IP}${dataHome?.image_two}`} alt="" />
                </Col>
            </div>
        </>
    )
}
