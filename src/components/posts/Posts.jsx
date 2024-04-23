import { useCallback, useState } from "react";
import Post from "../post/Post";
import { useTranslation } from "react-i18next";

export default function(){
    const {t} = useTranslation();
    const [isShow, setShow] = useState(false);
    const [id, setId] = useState(0);

    const doc = useCallback((st)=>{
            if (!isShow) {
                setShow(true); 
                setId(st)
            }
    },[])

    
    return(
        <div className="head_post">
            <h1>{t("doctors")}</h1>
            <div className="post_title">
                <span onClick={()=>{
                    doc(1)
                }}>{t("professions.therapist")}</span>
                <span onClick={()=>{
                    doc(2)
                }}>{t("professions.pediatrician")}</span>
                <span onClick={()=>{
                    doc(4)
                }}>{t("professions.gynecologist")}</span>
            </div>
            <div className="posts">

            {isShow ? <Post state={id}/> : <Post state={1}/>}   
            
            </div>
        </div>
    )
}