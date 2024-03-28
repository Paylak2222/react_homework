import { useContext, useState } from "react"
import TranslateContext from "./TranslateContext";

export default function () {
    const[lang , setLang] = useState("ru");

    return (
        <>
            <div onClick={()=>{
                setLang("ru");
                console.log(lang);
            }} className="lang_ru">
                RU
            </div>
            <div onClick={()=>{
                setLang("en")
                console.log(lang);
            }} className="lang_en">
                EN
            </div>
            
        </>
    )
}