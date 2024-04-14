import { useCallback, useContext, useMemo, useState } from "react";
import Doctors from "../doctors/Doctors";
import Post from "../post/Post";
import TranslateContext from "../translate-context/TranslateContext";
import { useTranslation } from "react-i18next";

export default function(){
    const {t} = useTranslation();
    const [isShow, setShow] = useState(false);
    const [state, setState] = useState(0);

    const status = useCallback((st)=>{
            if (!isShow) {
                setShow(true); 
                setState(st)
            }
    },[])
    
    return(
        <div className="head_post">
            <h1>{t("notes")}</h1>
            <div className="post_title">
                <span onClick={()=>{
                    status("1")
                }}>{t("add")}</span>
                <span onClick={()=>{
                    status("2")
                }}>{t("lasted")}</span>
                <span onClick={()=>{
                    status("3")
                }}>{t("canceled")}</span>
            </div>
            <div className="posts">
            
            {isShow ? <Post state={state}/> : <Post />  }   
            
            </div>
        </div>
    )
}