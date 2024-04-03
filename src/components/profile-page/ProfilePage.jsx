import { useParams } from "react-router-dom"
import Doctors from "../doctors/Doctors"
import { useContext } from "react"
import TranslateContext from "../translate-context/TranslateContext"


export default function(){
    const t = useContext(TranslateContext).lang
    const {userId} = useParams()
    const user = Doctors.doc(t);
    let res = user.filter((us)=>us.userId == userId);
    res = res[0];
    return(
        <>
            <div className="profile_doctor">
                <div className="profile_1">
                    <span>{t.doctor} ></span>
                    <span>{res.profession} ></span>
                    <p className="active_span">{t.doctor_profile}</p> 
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
                    <span>{t.entry}</span>
                </div>
                <p>{res.zapis}</p>
                <div className="row">
                    <div className="calendar educate"></div>
                    <span>{t.education}</span>
                </div>
                <p>{res.educate}</p>
                <p>{res.educate_2}</p>
                <div className="row">
                    <div className="calendar plus"></div>
                    <span>{t.treatment}</span>
                </div>
                <p>{t.lorem}</p>
                <div className="row">
                    <div className="calendar znak"></div>
                    <span>{t.other}</span>
                </div>
                <p>{t.lorem}</p>
            </div>
        </>
    )
}