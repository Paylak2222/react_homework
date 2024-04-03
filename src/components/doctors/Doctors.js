import { useContext } from "react";
import Translate from "../translate/Translate";
import TranslateContext from "../translate-context/TranslateContext";

let user;
const user_en = [
    {
        userId:1,
        date:Translate.en.user1_date,
        time:"16:00",
        name:Translate.en.user1_name,
        profession:Translate.en.user1_prof,
        experience:Translate.en.user1_exper,
        image:"./doctor.jpg",
        status:"1",
        minutes:"30 minute",
        consult:"900 Р/consultation",
        zapis:Translate.en.user1_zapis,
        educate:Translate.en.user1_educate,
        educate_2:Translate.en.user1_second_educate,
    },
    {
        userId:2,
        date:Translate.en.user2_date,
        time:"18:00",
        name:Translate.en.user2_name,
        profession:Translate.en.user2_prof,
        experience:Translate.en.user2_exper,
        image:"./doctor2.jpg",
        status:"2",
        minutes:"20 minute",
        consult:"600 Р/consultation",
        zapis:Translate.en.user2_zapis,
        educate:Translate.en.user2_educate,
        educate_2:Translate.en.user2_second_educate,
    },
    {
        userId:3,
        date:Translate.user3_date,
        time:"12:00",
        name:Translate.en.user3_name,
        profession:Translate.en.user3_prof,
        experience:Translate.en.user3_exper,
        image:"./doctor3.jpg",
        status:"1",
        minutes:"30 minute",
        consult:"1000 Р/consultation",
        zapis:Translate.en.user3_zapis,
        educate:Translate.en.user3_educate,
        educate_2:Translate.en.user3_second_educate,
    },
    {
        userId:4,
        date:Translate.en.user4_date,
        time:"15:00",
        name:Translate.en.user4_name,
        profession:Translate.en.user4_prof,
        experience:Translate.en.user4_exper,
        image:"./doctor4.jpg",
        status:"3",
        minutes:"40 minute",
        consult:"1400 Р/consultation",
        zapis:Translate.en.user4_zapis,
        educate:Translate.en.user4_educate,
        educate_2:Translate.en.user4_second_educate,
    },
    {
        userId:5,
        date:Translate.en.user5_date,
        time:"18:00",
        name:Translate.en.user5_name,
        profession:Translate.en.user5_prof,
        experience:Translate.en.user5_exper,
        image:"./doctor5.jpg",
        status:"2",
        minutes:"20 minute",
        consult:"700 Р/consultation",
        zapis:Translate.en.user5_zapis,
        educate:Translate.en.user5_educate,
        educate_2:Translate.en.user5_second_educate,
    },
]   

const user_ru = [
    {
        userId:1,
        date:Translate.ru.user1_date,
        time:"16:00",
        name:Translate.ru.user1_name,
        profession:Translate.ru.user1_prof,
        experience:Translate.ru.user1_exper,
        image:"./doctor.jpg",
        status:"1",
        minutes:"30 минут",
        consult:"900 Р / консультация",
        zapis:Translate.ru.user1_zapis,
        educate:Translate.ru.user1_educate,
        educate_2:Translate.ru.user1_second_educate,
        
    },
    {
        userId:2,
        date:Translate.ru.user2_date,
        time:"18:00",
        name:Translate.ru.user2_name,
        profession:Translate.ru.user2_prof,
        experience:Translate.ru.user2_exper,
        image:"./doctor2.jpg",
        status:"2",
        minutes:"20 минут",
        consult:"600 Р / консультация",
        zapis:Translate.ru.user2_zapis,
        educate:Translate.ru.user2_educate,
        educate_2:Translate.ru.user2_second_educate,
    },
    {
        userId:3,
        date:Translate.ru.user3_date,
        time:"12:00",
        name:Translate.ru.user3_name,
        profession:Translate.ru.user3_prof,
        experience:Translate.ru.user3_exper,
        image:"./doctor3.jpg",
        status:"1",
        minutes:"30 минут",
        consult:"1000 Р / консультация",
        zapis:Translate.ru.user3_zapis,
        educate:Translate.ru.user3_educate,
        educate_2:Translate.ru.user3_second_educate,
    },
    {
        userId:4,
        date:Translate.ru.user4_date,
        time:"15:00",
        name:Translate.ru.user4_name,
        profession:Translate.ru.user4_prof,
        experience:Translate.ru.user4_exper,
        image:"./doctor4.jpg",
        status:"3",
        minutes:"40 минут",
        consult:"1400 Р / консультация",
        zapis:Translate.ru.user4_zapis,
        educate:Translate.ru.user4_educate,
        educate_2:Translate.ru.user4_second_educate,
    },
    {
        userId:5,
        date:Translate.ru.user5_date,
        time:"18:00",
        name:Translate.ru.user5_name,
        profession:Translate.ru.user5_prof,
        experience:Translate.ru.user5_exper,
        image:"./doctor5.jpg",
        status:"2",
        minutes:"20 минут",
        consult:"700 Р / консультация",
        zapis:Translate.ru.user5_zapis,
        educate:Translate.ru.user5_educate,
        educate_2:Translate.ru.user5_second_educate,
    },
]   


function doc(ln){
    if (ln == Translate.en) {
        user = user_en;
        return user;
     }else{
        user = user_ru;
        return user;
     }
}

export default {user,doc};