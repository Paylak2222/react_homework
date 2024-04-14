import { useContext } from "react"
import TranslateContext from "../translate-context/TranslateContext"
import { useTranslation } from "react-i18next"

export default function(){
    const {t} = useTranslation()
    return(
        <div className="order">
            <div className="order_logo"></div>
            <div className="order_desc">
                <h1>{t("appointment")}</h1>
                <p>{t("order_desc")}</p>
                <ul>
                    <li>{t("first_order")}</li>
                    <li>{t("second_order")}</li>
                    <li>{t("third_order")}</li>
                </ul>
                <h3>{t("order")}</h3>
            </div>
        </div>
    )
}