import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import { Col } from "react-bootstrap";
import { useMyContext } from "../../../context/langugaeContext";

export default function Footer() {
  const { socaial } = useMyContext();

  const handleGoToInstagram = () => {
    const instagramUrl = `https://www.instagram.com/${socaial.instagram}`;
    window.open(instagramUrl, "_blank");
  };

  const handleGoToWebsite = () => {
    const webSiteUrl = `https://order.qmancafe.com/order`;
    window.open(webSiteUrl, "_blank");
  };

  return (
    <>
      <footer className="footer">
        <Col md={6} className="socal-media">
          {/* <div className="icon-socal-wrapper" onClick={handleGoToWhatsUp} >
                        <WhatsAppIcon className="icon-socal" />
                    </div>
                    <div className="icon-socal-wrapper second-icon" onClick={handleGoToTelegram} >
                        <TelegramIcon className="icon-socal" style={{ padding: " 0 3px 0 0" }} />
                    </div> */}
          <div
            className="icon-socal-wrapper second-icon"
            onClick={handleGoToWebsite}
          >
            <LanguageIcon className="icon-socal" />
          </div>
          <div className="icon-socal-wrapper" onClick={handleGoToInstagram}>
            <InstagramIcon className="icon-socal" />
          </div>
        </Col>
        <Col md={6} className="footer-right">
          <p className="footer-text-1">c 2024 Qmancafe All Rights Reserved</p>
          <p className="footer-text-2">Powered By NOBINCO</p>
        </Col>
      </footer>
    </>
  );
}
