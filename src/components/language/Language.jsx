import { useContext, useState } from "react"
import TranslateContext from "../translate-context/TranslateContext";
import Translate from "../translate/Translate";
import i18n from "../../services/i18n";

export default function () {
    // const {lang, setLang} = useContext(TranslateContext)
    const [clas, setClass] = useState(`${i18n.language === "ru"?"active":"off"}`);
    const [clas_2, setClass2] = useState(`${i18n.language === "en"?"active_2":"off_2"}`);
    return (
        <>
            <div onClick={() => {
                i18n.changeLanguage("ru")
                setClass("active")
                setClass2("off_2")
            }} className={clas}>
                RU
            </div>
            <div onClick={() => {
                i18n.changeLanguage("en")
                setClass2("active_2")
                setClass("off")
            }} className={clas_2}>
                EN
            </div>
        </>
    )

}