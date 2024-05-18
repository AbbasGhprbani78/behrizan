import React from 'react'
import './Section4.css'
import Button from '../../../modules/Button/Button'
import { Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useMyContext } from '../../../../context/langugaeContext';
export default function Section4() {
    const { language } = useMyContext()
    const { t } = useTranslation();
    return (
        <>
            <div className={`section4-wrapper ${language === "fa" && "rtl"}`}>
                <Col xs={12} md={6} className="section4-left">
                    <p className="section4-title">{t("VeganMilk")}</p>
                    <p className="section4-dec">
                        {t("text")}
                    </p>
                    {/* <div className="btn-section4-wrapper">
                        <Button
                            text="Order"
                        />
                    </div> */}
                </Col>
                <Col xs={12} md={6} className="section4-right"></Col>
            </div>
        </>
    )
}