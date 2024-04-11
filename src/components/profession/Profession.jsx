import { useContext } from "react"
import TranslateContext from "../translate-context/TranslateContext"
import { doc } from "../professions/Doctor_prof";


export default function () {
    const t = useContext(TranslateContext).lang;
    const prof = doc(t);
    return (
        <>
            {
                prof.map((item) => {
                    return (
                        <div className="profession_link" >
                            <div className="prof_logo" style={{ backgroundImage: `url("${item.prof_logo}")` }}></div>
                            <h4>{item.prof_name}</h4>
                            <p>{item.prof_desc}</p>
                        </div>
                    )
                })
            }
        </>
    )
}