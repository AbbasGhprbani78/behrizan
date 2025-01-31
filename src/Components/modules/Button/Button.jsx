import React from 'react'
import './Button.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
export default function Button({ name, id }) {
    const { t } = useTranslation();
    return (
      <>
        <Link
          className="link"
          to={`https://order.qmancafe.com/order/qmancafe?share=category&shareParams=catTitle-75046`}
        >
          <button className="btn-module">{t("ViewMore")}</button>
        </Link>
      </>
    );
}
