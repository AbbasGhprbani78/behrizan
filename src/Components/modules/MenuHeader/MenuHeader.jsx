import React, { useState } from "react";
import "./MenuHeader.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
export default function MenuHeader({ isborder }) {
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  return (
    <div className={`menu-Header ${isborder && "border-menu"}`}>
      <div className="menu-tab-list">
        {windowWidth <= 768 && (
          <>
            <NavLink to={"/categorymenus"} className="menu-tab-list-item">
              {t("Menu")}
            </NavLink>
            <NavLink
              to={"/Favorites"}
              className="menu-tab-list-item"
              onClick={(e) => e.preventDefault()}
            >
              {t("orderonline")}
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}
