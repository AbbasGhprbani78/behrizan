import React, { useEffect, Fragment, useState } from "react";
import "./section2.css";
import Button from "../../../modules/Button/Button";
import { Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { useMyContext } from "../../../../context/langugaeContext";
import axios from "axios";
import { IP } from "../../../../App";
import Lodaing from "../../../modules/Loading/Lodaing";

export default function Section2({ dataHome }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { language } = useMyContext();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState("");

  useEffect(() => {
    const offProducts = async () => {
      const headers = {
        "Accept-Language": language,
      };
      setLoading(true);

      try {
        const response = await axios.get(`${IP}/home/get-special-offer/`, {
          headers,
        });

        if (response.status === 200) {
          setProduct(response.data);
          setLoading(false);
        }
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    offProducts();
  }, [language]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      easing: "ease",
    });
  }, []);

  const headerText =
    language === "fa" ? dataHome?.text_two_farsi : dataHome?.text_two;

  const formattedHeaderText = headerText
    ?.split(",")
    .flatMap((text, index, arr) =>
      index % 2 === 0
        ? [
            <Fragment key={index}>
              {text}
              {index < arr.length - 1 && <br />}
            </Fragment>,
            index < arr.length - 1 ? (
              <Fragment key={`${index}-span`}>
                <span>{arr[index + 1]}</span>
              </Fragment>
            ) : null,
          ]
        : []
    );

  return (
    <>
      {loading ? (
        <Lodaing />
      ) : windowWidth <= 605 ? (
        <>
          <div className={`section2-wrapper ${language === "fa" && "rtl"}`}>
            <Col xs={4} className={`drinking-text-wrapper `}>
              <div className="drinking-text drinking-text-left">
                <p className="drinking-text-left-main">{t("special")}</p>
              </div>
              <div className="drinking-text drinking-text-right">
                <p className="drinking-text-right-main">{t("offer")}</p>
              </div>
            </Col>
            <Col
              xs={8}
              data-aos={`fade-top`}
              data-aos-once="false"
              className="mainproductperfect"
            >
              <div className="image-section2-wrapper-m ">
                <img src={`/images/IMG_9105.PNG`} alt="" />
              </div>
            </Col>
          </div>
          <div className="text-section2">{formattedHeaderText}</div>
          <div className="btn-section2">
            <Button
              name={product[0]?.name}
              id={product[0]?.id}
              text={"Order"}
            />
          </div>
        </>
      ) : (
        <>
          <div className={`section2-container ${language === "fa" && "rtl"}`}>
            <div className="section2-wrapper">
              <Col sm={7} className="left-section2">
                <div
                  className={`drinking-text-wrapper ${
                    language === "fa" && "feauter"
                  }`}
                >
                  <div className={`drinking-text drinking-text-left`}>
                    <p className="drinking-text-left-main">{t("special")}</p>
                  </div>
                  <div className={`drinking-text drinking-text-right`}>
                    <p className="drinking-text-right-main">{t("offer")}</p>
                  </div>
                </div>
                <div className="text-section2">{formattedHeaderText}</div>
                <div className="btn-section2">
                  <Button name={product[0]?.name} id={product[0]?.id} />
                </div>
              </Col>
              <Col sm={5} className="right-section2">
                <>
                  <div
                    className="fade-wrapper fade-wrapper-m"
                    data-aos="fade-top"
                    data-aos-once="false"
                  >
                    <div className="image-section2-wrapper">
                      <img src={`/images/IMG_9105.PNG`} alt="" />
                    </div>
                  </div>
                </>
              </Col>
            </div>
          </div>
        </>
      )}
    </>
  );
}
