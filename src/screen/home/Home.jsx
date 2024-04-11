import Language from "../../components/language/Language";
import Order from "../../components/order/Order";
import Posts from "../../components/posts/Posts";
import Professions from "../../components/professions/Professions";
import Section from "../../components/section/Section";


export default function(){
    return(
        <>
            <Section />
            <Order />
            {/* <Posts /> */}
            <Professions />
        </>
    )
}