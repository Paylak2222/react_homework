import { useContext, useState } from "react"
import TranslateContext from "../translate-context/TranslateContext";
import Translate from "../translate/Translate";

export default function () {
    const {lang, setLang} = useContext(TranslateContext)
    const [clas, setClass] = useState("active");
    const [clas_2, setClass2] = useState("off_2");
    return (
        <>
            <div onClick={() => {
                setLang(Translate.ru)
                setClass("active")
                setClass2("off_2")
                console.log(lang);
            }} className={clas}>
                RU
            </div>
            <div onClick={() => {
                setLang(Translate.en)
                setClass2("active_2")
                setClass("off")
                console.log(lang);
            }} className={clas_2}>
                EN
            </div>
        </>
    )

}