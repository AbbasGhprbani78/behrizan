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
                <Col xs={12} md={6} className="section6-left"></Col>
                <Col xs={12} md={6} className="section6-right">
                    <p className="Qcafe-title">Q Cafe</p>
                    <p className="Qcafe-text1">
                        In order to complete our team, Q Cafe announces cooperation in the job position of the workforce in all sections
                    </p>
                    <p className="Qcafe-text2">
                        Those interested can send their resume via WhatsApp to
                    </p>
                    <span className="qcafe-phone">
                        09367959455
                    </span>
                </Col>
            </div>
        </>
    )
}
