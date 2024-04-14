import { useContext } from "react"
import TranslateContext from "../translate-context/TranslateContext"
import { useTranslation } from "react-i18next"

export default function(){
    const {t} = useTranslation();
    return(
        <div className="section">
            <div className="section_1">
                <h1><u className="under">{t("first_heading")}</u> <br/>
                    {t("second_heading")}</h1>
                <p>{t("consultation")} <u className="under">{t("now")}</u> {t("or")} <u className="under">{t("register")}</u><br/> {t("text1")}<br/>{t("text2")} <span>App Store</span> {t("and")} <span>Google Play</span></p>
                <div className="buttons">
                    <button className="but_1">{t("order")}</button>
                    <button className="but_2">{t("howWork")}</button>
                </div>
            </div>
            <div className="section_2"></div>
        </div>
    )
}