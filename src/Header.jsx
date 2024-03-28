import { useContext, useState } from "react"
import UserProfile from "./UserProfile";
import TranslateContext from "./TranslateContext";

export default function () {
    const [isShow, setShow] = useState(false);

    const t = useContext(TranslateContext);
    return (
        <>
            <div className="header">
                <div className="logo"></div>
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