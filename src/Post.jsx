import { useContext } from "react"
import TranslateContext from "./TranslateContext"


export default function(props){
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

    let res = user.filter((us)=>us.status === props.state);
    if(res.length === 0){
        res = user;
    }
    return(
        <>
        {   
        res.map((item,index)=>{
            if(item.status === "1"){
                item.o = t.zaplanir
                item.clas = "ordered"
            }else if(item.status === "2"){
                item.o = t.sostayal
                item.clas = "pasted"
            }else{
                item.o = t.otmen
                item.clas = "otmen"
            }
            return (
                <div key={index} className="main_post">
                     <div className="main_1">
                <div className="first">
                    <div className="first_logo"></div>
                    <span>{item.date} </span>
                </div>
                <div className="first ss">
                    <div className="first_logo second_logo"></div>
                    <span>{item.time}</span>
                </div>
                <div className="first">
                    <div className="first_logo third_logo"></div>
                    <span>{t.video}</span>
                </div>
                <div className={item.clas}>
                    <span>{item.o}</span>
                </div>
            </div>
            <div className="main_2">
                <div className="ordered_logo" style={{backgroundImage: `url("${item.image}")` }}></div>
                <div className="ordered_2">
                    <div className="info">
                        <h3>{item.name}</h3>
                        <p>{item.profession}</p>
                        <span className="pi_2">{item.experience}</span>
                    </div>
                    <div className="second_info">
                        <button className="second_info_but1">{t.look}</button>
                        <button className="second_info_but2">{t.look2}</button>
                    </div>
                </div>
            </div>
        </div>
        )
            })}
        
        </>
    )
}