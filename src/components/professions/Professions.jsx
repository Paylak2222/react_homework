import { useContext,useState,useCallback } from "react"
import TranslateContext from "../translate-context/TranslateContext"
import Profession from "../profession/Profession";
import { useTranslation } from "react-i18next";

export default function(){
    const{t} = useTranslation()
    return (
            <div className="profff">
                <h1>{t("doctors")}</h1>
                <p>{t("choose_cat")}</p>
                 <div className="professions">
                    <Profession />
                 </div>
            </div>
    )
}