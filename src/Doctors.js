import { useContext } from "react"
import TranslateContext from "./TranslateContext"

export default function(){
    const t = useContext(TranslateContext);
    const user = [
        {
            date:t.user1_date,
            time:"16:00",
            name:t.user1_name,
            profession:t.user1_prof,
            experience:t.user1_exper,
            image:"./doctor.jpg",
            status:"1"
        },
        {
            date:t.user2_date,
            time:"18:00",
            name:t.user2_name,
            profession:t.user2_prof,
            experience:t.user2_exper,
            image:"./doctor2.jpg",
            status:"2"
        },
        {
            date:t.user3_date,
            time:"12:00",
            name:t.user3_name,
            profession:t.user3_prof,
            experience:t.user3_exper,
            image:"./doctor3.jpg",
            status:"1"
        },
        {
            date:t.user4_date,
            time:"15:00",
            name:t.user4_name,
            profession:t.user4_prof,
            experience:t.user4_exper,
            image:"./doctor4.jpg",
            status:"3"
        },
        {
            date:t.user5_date,
            time:"18:00",
            name:t.user5_name,
            profession:t.user5_prof,
            experience:t.user5_exper,
            image:"./doctor5.jpg",
            status:"2"
        },
    ]   

    return (    
        <>
            <span>{user}</span>
        </>
    )
}