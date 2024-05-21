import React from 'react'
import './Section6.css'
import { Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import { useMyContext } from '../../../../context/langugaeContext';
export default function Section6() {
    const { language } = useMyContext()
    const { t } = useTranslation();
    return (
        <>
            <div className={`section6-wrapper ${language === "fa" && "rtl"}`}>
                <Col xs={12} md={6} className="section6-left">
                    <img src="../../../../../public/images/Frame 36.png" alt="" />
                </Col>
                <Col xs={12} md={6} className="section6-right">
                    <p className="Qcafe-title">{t("QCafe")}</p>
                    <p className="Qcafe-text1 mt-2">
                        {t("homedec")}
                    </p>
                    <p className="Qcafe-text2">
                        {t("contactw")}
                    </p>
                    <span className="qcafe-phone mt-2">
                        09363498950
                    </span>
                </Col>
            </div>
        </>
    )
}
