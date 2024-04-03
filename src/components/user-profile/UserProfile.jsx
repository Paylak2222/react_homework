import { useContext } from "react"
import TranslateContext from "../translate-context/TranslateContext"
import { Link } from "react-router-dom";

export default function () {
    const t = useContext(TranslateContext).lang;
    return (
        <div className="under_profile">
            <ul>
                <li><Link to={"/notes"}>{t.profile}</Link></li><hr/>
                <li><Link to={"/balance"}>{t.balance}</Link></li><hr/>
                <li><a href="">FAQ</a></li><hr/>
                <li><a href="">{t.exit}</a></li>
            </ul>
        </div>
    )
}