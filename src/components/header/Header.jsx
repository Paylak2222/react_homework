import { useContext, useEffect, useState } from "react"
import UserProfile from "../user-profile/UserProfile";
import TranslateContext from "../translate-context/TranslateContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/actions";

export default function () {
    const [isShow, setShow] = useState(false);
    const {t} = useTranslation()

    useEffect(()=>{
        document.onclick = (event)=>{
            if(isShow){
                setShow(false);
            }
        }
    },[isShow])

    const clickArrow = useCallback((event) => {
        event.stopPropagation();
        if (isShow === false) {
            setShow(true)
        }else{
            setShow(false)
        }
    },[isShow]);


    
    return (
        <>

            <div className="header">
                <Link to={"/"}><div className="logo"></div></Link>
                <div className="menu">
                    <div className="menu_2">
                        <ul>
                            <li><a href="">{t("howToUse")}</a></li>
                            <li><a href="">{t("myNotes")}</a></li>
                            <li><a href="">{t("appointment")}</a></li>
                        </ul>
                    </div>
                    <div className="message"></div>
                    <div className="user_page" onClick={clickArrow}>
                        <div className="user_logo"></div>
                        <p>Артем Свиридов </p>
                        <div className="cursor"></div>
                    </div>
                </div>
            </div>
            {isShow ? <UserProfile /> : null}
        </>
    )
}