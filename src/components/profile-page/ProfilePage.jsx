import { useParams } from "react-router-dom"
import users from "../doctors/Doctors"
import { useContext, useMemo } from "react"
import TranslateContext from "../translate-context/TranslateContext"
import { useTranslation } from "react-i18next"


export default function(){
    // const t = useContext(TranslateContext).lang
    const {t} = useTranslation();
    const {userId} = useParams()

        const res = useMemo(()=>{
        // const user = Doctors.doc(t);
    return users.find((us)=>us.userId == userId);
    },[t,userId])
    if(!res) return <div>Not Found</div>
    return(
        <>
            <div className="profile_doctor">
                <div className="profile_1">
                    <span>{t("doctor")} &gt;</span>
                    <span>{res.profession} &gt;</span>
                    <p className="active_span">{t("doctor_profile")}</p> 
                    <div className="prof">
                      <div className="profile_logo" style={{backgroundImage: `url("${res.image}")` }}></div> 
                      <div className="profile_desc">
                        <h3>{res.name}</h3>
                        <h4>{res.profession}</h4>
                        <h5>{res.experience}</h5>
                      </div>
                    </div>
                    
                </div>
                <div className="profile_2">
                    <p>{res.consult}</p>
                    <p>{res.minutes}</p>
                </div>
            </div>
            <div className="doctor_description">
                <div className="row">
                    <div className="calendar"></div>
                    <span>{t("entry")}</span>
                </div>
                <p>{res.zapis}</p>
                <div className="row">
                    <div className="calendar educate"></div>
                    <span>{t("education")}</span>
                </div>
                <p>{res.educate}</p>
                <p>{res.educate_2}</p>
                <div className="row">
                    <div className="calendar plus"></div>
                    <span>{t.treatment}</span>
                </div>
                <p>{t("lorem")}</p>
                <div className="row">
                    <div className="calendar znak"></div>
                    <span>{t.other}</span>
                </div>
                <p>{t("lorem")}</p>
            </div>
        </>
    )
}