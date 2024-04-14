import { useContext } from "react"
import TranslateContext from "../translate-context/TranslateContext"
import { useTranslation } from "react-i18next"

export default function(){
    const {t} = useTranslation()
    return (
        <div className="footer">
            <div className="first_footer">
                <div className="logo l2"></div>
                <p>{t("info")} <br/><br/>{t("info2")}</p>
                <div className="web_site">
                    <div className="insta"></div>
                    <div className="face"></div>
                    <div className="youtube"></div>
                </div>
                <div className="install">
                     <div className="app"></div>
                     <div className="play"></div>
                </div>
            </div>
            <div className="second_footer">
                <ul>
                    <li>{t("using")}</li>
                    <li>{t("fac")}</li>
                    <li>{t("doc")}</li>
                    <li>{t("serv")}</li>
                    <li>{t("contact")}</li>
                    <li>{t("users")}</li>
                </ul>
            </div>
            <div className="second_footer foot">
            <ul>
                    <li>{t("mail")}</li>
                    <li>{t("adress")}</li>
                    <li>{t("time")}</li>
                    <li>{t("phone")}</li>
                </ul>
            </div>
        </div>
    )
}