import { useContext } from "react"
import TranslateContext from "../translate-context/TranslateContext"
import users from "../doctors/Doctors"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function(props){
    const {t} = useTranslation();

    let res = users.filter((us)=>us.status === props.state);
    if(res.length === 0){
        res = users;
    }
    return(
        <>
        {   
        res.map((item,index)=>{
            if(item.status === "1"){
                item.o = t("zaplanir")
                item.clas = "ordered"
            }else if(item.status === "2"){
                item.o = t("sostayal")
                item.clas = "pasted"
            }else{
                item.o = t("otmen")
                item.clas = "otmen"
            }
            return (
                <div key={index} className="main_post">
                     <div className="main_1">
                <div className="first">
                    <div className="first_logo"></div>
                    <span>{item.date} </span>
                </div>
                <div className="first ss">
                    <div className="first_logo second_logo"></div>
                    <span>{item.time}</span>
                </div>
                <div className="first">
                    <div className="first_logo third_logo"></div>
                    <span>{t("video")}</span>
                </div>
                <div className={item.clas}>
                    <span>{item.o}</span>
                </div>
            </div>
            <div className="main_2">
                <div className="ordered_logo" style={{backgroundImage: `url("${item.image}")` }}></div>
                <div className="ordered_2">
                    <div className="info">
                        <h3>{item.name}</h3>
                        <p>{item.profession}</p>
                        <span className="pi_2">{item.experience}</span>
                    </div>
                    <div className="second_info">
                       <Link to={`/${item.userId}`}> <button className="second_info_but1">{t("look")}</button></Link>
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