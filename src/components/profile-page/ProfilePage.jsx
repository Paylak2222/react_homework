import { useParams } from "react-router-dom"
import users from "../doctors/Doctors"
import { useContext, useEffect, useMemo, useState } from "react"
import TranslateContext from "../translate-context/TranslateContext"
import { useTranslation } from "react-i18next"
import publicAPI from "../../services/api/publicAPI"
import i18n from "../../services/i18n"


export default function(){
    // const t = useContext(TranslateContext).lang
    const {t} = useTranslation();
    const {userId} = useParams();
    const [doc , setDoc] = useState();

    useEffect(()=>{
        publicAPI.get(`/user/${userId}/?role=doctor`).then((doc)=>{
           setDoc(doc.data)
        })
    },[]) 


    if(!doc) {
        return <div>Not Found</div>
    }
    else{
       return(
        <>
            <div className="profile_doctor">
                <div className="profile_1">
                    <span>{t("doctor")} &gt;</span>
                    <span>{i18n.language === "ru" ? doc.user_categories[0].category.title.ru : doc.user_categories[0].category.title.ro} &gt;</span>
                    <p className="active_span">{t("doctor_profile")}</p> 
                    <div className="prof">
                      <div className="profile_logo" style={{backgroundImage: `url("${doc.profile_image}")` }}></div> 
                      <div className="profile_desc">
                        <h3>{doc.first_name} {doc.last_name}</h3>
                        <h4>{i18n.language === "ru" ? doc.user_categories[0].category.title.ru : doc.user_categories[0].category.title.ro}</h4>
                        <h5>{t("exper")} {new Date().getFullYear() - doc.doctor_details.excperience_start_year} {t("year")}</h5>
                      </div>
                    </div>
                    
                </div>
                <div className="profile_2">
                    <p>{doc.doctor_details.price} ₽ / {t("con")}</p>
                    <p>{doc.doctor_details.consultation_duration} {t("min")}</p>
                </div>
            </div>
            <div className="doctor_description">
                <div className="row">
                    <div className="calendar"></div>
                    <span>{t("entry")}</span>
                </div>
                <p>{doc.near_date}</p>
                <div className="row">
                    <div className="calendar educate"></div>
                    <span>{t("education")}</span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: doc.doctor_details.education }} />
                <div className="row">
                    <div className="calendar plus"></div>
                    <span>{t("treatment")}</span>
                </div>
                <p>{i18n.language === "ru" ? doc.user_categories[0].category.description.ru : doc.user_categories[0].category.description.ro}</p>
                <div className="row">
                    <div className="calendar znak"></div>
                    <span>{ t("other")}</span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: doc.doctor_details.extra_info }} />
            </div>
        </>
    ) 
    }
    
}