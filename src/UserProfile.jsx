import { useContext } from "react"
import TranslateContext from "./TranslateContext"

export default function () {
    const t = useContext(TranslateContext);
    return (
        <div className="under_profile">
            <ul>
                <li><a href="">{t.profile}</a></li><hr/>
                <li><a href="">{t.balance}</a></li><hr/>
                <li><a href="">FAQ</a></li><hr/>
                <li><a href="">{t.exit}</a></li>
            </ul>
        </div>
    )
}