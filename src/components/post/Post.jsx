import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import i18n from "../../services/i18n"
import { useDispatch, useSelector } from "react-redux"
import { doctorsAction } from "../../store/actions"
import { doctorsSelectors } from "../../store/selectors"


export default function(props){
    const {t} = useTranslation();
    const {loading,list,error} = useSelector(doctorsSelectors.doctorsSelector)
    const dispatch = useDispatch()
    

    useEffect(()=>{
            dispatch(doctorsAction.get(props.state))
    },[props.state])

    return(
        <>
        {loading?"loading": 
        list.map((item,index)=>{
            return (
                
                <div key={index} className="main_post">
                     <div className="main_1">
                <div className="first">
                    <div className="first_logo"></div>
                    <span>{item.near_date} </span>
                </div>
                <div className="first">
                    <div className="first_logo third_logo"></div>
                    <span>{t("video")}</span>
                </div>
            </div>
            <div className="main_2">
                <div className="ordered_logo" style={{backgroundImage: `url("${item.profile_image}")` }}></div>
                <div className="ordered_2">
                    <div className="info">
                        <h3>{item.first_name} {item.last_name}</h3>
                        <p>{i18n.language === "ru"?item.user_categories[0].category.title.ru:item.user_categories[0].category.title.ro}</p>
                        <span className="pi_2">{t("exper")} {new Date().getFullYear() - item.excperience_start_year} {t("year")}</span>
                    </div>
                    <div className="second_info">
                       <Link to={`/${item.id}`}> <button className="second_info_but1">{t("look")}</button></Link>
                        <button className="second_info_but2">{t("look2")}</button>
                    </div>
                </div>
            </div>
        </div>
        )
            })}
        
        </>
    )
}