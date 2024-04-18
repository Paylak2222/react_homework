import { useContext,useState,useCallback } from "react"
import TranslateContext from "../translate-context/TranslateContext"
import Profession from "../profession/Profession";
import { useTranslation } from "react-i18next";

export default function(){
    const{t} = useTranslation();
    const [isShow, setShow] = useState(false);
    const [state, setState] = useState(0);

    const status = useCallback((st)=>{
            if (!isShow) {
                setShow(true); 
                setState(st)
            }
    },[])
    
    return (
            <div className="profff">
                <h1>{t("doctors")}</h1>
                <p>{t("choose_cat")}</p>
                 
                <div className="doctors_prof">
                <div className="post_title">
                <span onClick={()=>{
                    status("1")
                }}>{(t("professions.therapist"))}</span>
                <span onClick={()=>{
                    status("2")
                }}>{t("professions.pediatrician")}</span>
                <span onClick={()=>{
                    status("3")
                }}>{t("professions.gynecologist")}</span>
            </div>
            <div className="posts">
            
            {/* {isShow ? <Post state={state}/> : <Post />  }    */}
            
            </div>
        </div>
            </div>
    )
}