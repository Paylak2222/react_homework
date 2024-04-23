import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import i18n from "../../services/i18n"
import { useDispatch, useSelector } from "react-redux"
import { doctorProfileAction } from "../../store/actions"
import { doctorProfileSelectors } from "../../store/selectors"


export default function () {
    const { t } = useTranslation();
    const { userId } = useParams();

    const dispatch = useDispatch()
    const {data,loading,error} = useSelector(doctorProfileSelectors.doctorProfleSelector)

    useEffect(() => {
            dispatch(doctorProfileAction.get(userId))
    }, [dispatch])

   
    if (loading) {
        return (
            <p>loading</p>
        )
    }else{
        return (
            <>  
              <div className="profile_doctor">
                     <div className="profile_1">
                         <span>{t("doctor")} &gt;</span>
                         <span>{i18n.language === "ru" ? data.user_categories[0].category.title.ru : data.user_categories[0].category.title.ro} &gt;</span>
                         <p className="active_span">{t("doctor_profile")}</p>
                         <div className="prof">
                             <div className="profile_logo" style={{ backgroundImage: `url("${data.profile_image}")` }}></div>
                             <div className="profile_desc">
                                 <h3>{data.first_name} {data.last_name}</h3>
                                 <h4>{i18n.language === "ru" ? data.user_categories[0].category.title.ru : data.user_categories[0].category.title.ro}</h4>
                                 <h5>{t("exper")} {new Date().getFullYear() - data.doctor_details.excperience_start_year} {t("year")}</h5>
                             </div>
                         </div>
     
                     </div>
                     <div className="profile_2">
                         <p>{data.doctor_details.price} ₽ / {t("con")}</p>
                         <p>{data.doctor_details.consultation_duration} {t("min")}</p>
                     </div>
                 </div>
                 <div className="doctor_description">
                     <div className="row">
                         <div className="calendar"></div>
                         <span>{t("entry")}</span>
                     </div>
                     <p>{data.near_date}</p>
                     <div className="row">
                         <div className="calendar educate"></div>
                         <span>{t("education")}</span>
                     </div>
                     <div dangerouslySetInnerHTML={{ __html: data.doctor_details.education }} />
                     <div className="row">
                         <div className="calendar plus"></div>
                         <span>{t("treatment")}</span>
                     </div>
                     <p>{i18n.language === "ru" ? data.user_categories[0].category.description.ru : data.user_categories[0].category.description.ro}</p>
                     <div className="row">
                         <div className="calendar znak"></div>
                         <span>{t("other")}</span>
                     </div>
                     <div dangerouslySetInnerHTML={{ __html: data.doctor_details.extra_info }} />
                 </div>
     
             </>
         )
    }
    
}
