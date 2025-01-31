import React from 'react'
import './Section6.css'
import { Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import { useMyContext } from '../../../../context/langugaeContext';
import { IP } from '../../../../App';

export default function Section6({ dataHome }) {
    const { language, socaial } = useMyContext()
    const { t } = useTranslation();

    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    const toPersianDigits = (num) => {
        return num?.toString()?.replace(/\d/g, (x) => persianNumbers[parseInt(x)]);
    };


    const phoneNumber = language === 'fa' ? toPersianDigits(socaial?.whatsapp) : socaial?.whatsapp;
    return (
      <>
        <div className={`section6-wrapper ${language === "fa" && "rtl"}`}>
          <Col xs={12} md={6} className="section6-left">
            <img src={`${IP}${dataHome.image_three}`} alt="" />
          </Col>
          <Col xs={12} md={6} className="section6-right">
            <p className="Qcafe-title">
              {language === "fa"
                ? dataHome?.header_text_four_farsi
                : dataHome?.header_text_four}
            </p>
            <p className="Qcafe-text1 mt-2">
              {language === "fa"
                ? dataHome?.text_four_farsi
                : dataHome?.text_four}
            </p>
            <p className="Qcafe-text2">
              {language === "fa"
                ? dataHome?.last_text_farsi
                : dataHome?.last_text}
            </p>
            <span className="qcafe-phone mt-2">{phoneNumber}</span>
            <div className="address-wrapper d-flex align-items-center mt-4">
              <p className="address-lable">{t("Address")} : </p>
              {language === "fa" ? (
                <p className="address-text mx-2">
                  اصفهان، مصلی شمالی، نبش کوچه ۳
                </p>
              ) : (
                <p className="address-text mx-2"> {socaial?.address}</p>
              )}
            </div>
          </Col>
        </div>
      </>
    );
}
