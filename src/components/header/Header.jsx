import { useContext, useState } from "react"
import UserProfile from "../user-profile/UserProfile";
import TranslateContext from "../translate-context/TranslateContext";
import { Link } from "react-router-dom";

export default function () {
    const [isShow, setShow] = useState(false);
    const t = useContext(TranslateContext).lang;
    return (
        <>
            <div className="header">
                <Link to={"/"}><div className="logo"></div></Link>
                <div className="menu">
                    <div className="menu_2">
                        <ul>
                            <li><a href="">{t.howToUse}</a></li>
                            <li><a href="">{t.myNotes}</a></li>
                            <li><a href="">{t.appointment}</a></li>
                        </ul>
                    </div>
                    <div className="message"></div>
                    <div className="user_page" onClick={() => {
                        if (isShow) {
                            setShow(false)
                        }
                        else {
                            setShow(true)
                        }
                        console.log(isShow);
                    }}>
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