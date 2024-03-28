import { useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Language from './Language';
import Order from './Order';
import Posts from './Posts';
import Section from './Section';
import TranslateContext from './TranslateContext';
import Doctors from './Doctors';

const en = {
  lang:"en",
  howToUse: "How to use?",
  myNotes: "My Notes",
  appointment: "Appointment with doctor",
  first_heading:"Online consultations",
  second_heading:" from specialist doctors 24/7",
  text:"Consult now or by appointment from your computer or using our application, available on the App Store and Google Play",
  order:"Sign up",
  howWork:"How it works?",
  consultation:"Consult",
  or:"or by",
  now:"now",
  register:"pre-registration",
  text1:"from your computer or using our application,",
  text2:"available in",
  and:"and",
  profile:"My profile",
  balance:"Top up balance",
  exit:"Go out",
  order_desc:"More than 1,500 doctors and more than 50 different specializations",
  first_order:"Appointment at a time convenient for you, without a visit to the clinic",
  second_order:"Doctors with more than 8 years of experience",
  third_order:"We will clearly explain the cause of the disease and give detailed recommendations",
  notes:"my notes",
  add:"Upcoming",
  lasted:"Past",
  canceled:"Canceled",
  video:"Видео call",
  zaplanir:"Planned",
  sostayal:"Took place",
  otmen:"Canceled",
  look:"View entry",
  look2:"View the resolution",
  user1_date:"03 March 2021",
  user1_name:"Olga Nikitina",
  user1_prof:"Pediatrician",
  user1_exper:"15 years of experience",
  user2_date:"03 March 2021",
  user2_name:"Dmitriy Ivanov",
  user2_prof:"Otorhinolaryngologist (ENT), Therapist",
  user2_exper:"10 years of experience",
  user3_date:"15 May 2021",
  user3_name:"Anna Ivanovna",
  user3_prof:"Otorhinolaryngologist (ENT), Therapist",
  user3_exper:"5 years of experience",
  user4_date:"25 December 2021",
  user4_name:"Alisa Shklyaeva",
  user4_prof:"Therapist",
  user4_exper:"5 years of experience",
  user5_date:"21 November 2022",
  user5_name:"Nina Grigoryan",
  user5_prof:"Otorhinolaryngologist (ENT)",
  user5_exper:"9 years of experience",
  info:"Online consultations of specialist doctors, what this service offers.",
  info2:"In our web and mobile application you will find expert doctors who will provide you with personalized care online 24/7",
  using:"How to use",
  fac:"FAQ (answers to questions)",
  doc:"For doctors",
  serv:"About the service",
  contact:"Contacts",
  users:"Terms of use",
  mail:"Email: allodoc@mail.com",
  adress:"Adress: г. Москва.ул, Ленина 54, офис 51",
  time:"Time: Пн-Вс с 09:00 до 18:00",
  phone:"Phone: 8 800 555 35 35",
}

const ru = {
  lang:"ru",
  howToUse: "Как пользоваться?",
  myNotes: "Мои записи",
  appointment: "Записаться к врачу",
  first_heading:"Онлайн консультации",
  second_heading:" от врачей специалистов 24/7",
  order:"Записаться",
  howWork:"Как это работает?",
  consultation:"Проконсультируйтесь",
  or:"или по",
  now:"сейчас",
  register:"предварительной записи",
  text1:"со своего компьютера или c помощью нашего приложения,",
  text2:"доступного в",
  and:"и",
  profile:"Мой профиль",
  balance:"Пополнить баланс",
  exit:"Выйти",
  order_desc:"Более 1500 врачей и более 50 разных специализаций",
  first_order:"Прием в удобное для вас время, без визита в клинику",
  second_order:"Врачи с опытом работы более 8 лет",
  third_order:"Понятно объясним причину недуга и дадим подробную рекомендацию",
  notes:"мои записи",
  add:"Предстоящие",
  lasted:"Прошедшие",
  canceled:"Отмененные",
  video:"Видео связь",
  zaplanir:"Запланировано",
  sostayal:"Состоялась",
  otmen:"Отменялись",
  look:"Посмотреть запись",
  look2:"Посмотреть постановление",
  user1_date:"03 Марта 2021",
  user1_name:"Ольга Никитина",
  user1_prof:"Педиатр",
  user1_exper:"Стаж 15 лет",
  user2_date:"19 Марта 2022",
  user2_name:"Дмитрий Иванов",
  user2_prof:"Оториноларинголог (ЛОР), Терапевт",
  user2_exper:"Стаж 10 лет",
  user3_date:"15 Мая 2022",
  user3_name:"Анна Ивановна",
  user3_prof:"Оториноларинголог (ЛОР), Терапевт",
  user3_exper:"Стаж 5 лет",
  user4_date:"25 Декабря 2021",
  user4_name:"Алиса Шкляева",
  user4_prof:"Терапевт",
  user4_exper:"Стаж 8 лет",
  user5_date:"21 Ноябрья 2022",
  user5_name:"Нина Григорян",
  user5_prof:"Оториноларинголог (ЛОР)",
  user5_exper:"Стаж 9 лет",
  info:"Онлай- консульации специалистов врачей, то что предлагает данный сервис.",
  info2:"В нашем веб и мобильном приложении вы найдете врачей экспертов, которые окажут вам персонализированную помощь онлайн 24/7",
  using:"Как пользоваться",
  fac:"FAQ (ответы на вопросы)",
  doc:"Для врачей",
  serv:"О сервисе",
  contact:"Контакты",
  users:"Пользовательское соглашение",
  mail:"Почта: allodoc@mail.com",
  adress:"Адресс: г. Москва.ул, Ленина 54, офис 51",
  time:"Время: Пн-Вс с 09:00 до 18:00",
  phone:"Телефон: 8 800 555 35 35",
}

const user = <Doctors />
console.log(user);


function App() {
  const [lang, setLang] = useState(ru);
  const [clas, setClass] = useState("active");
  const [clas_2,setClass2] = useState("off_2");

  return (
    <div className="App">
      <div onClick={() => {
        setLang(ru);
        setClass("active")
        setClass2("off_2")
      }} className={clas}>
        RU
      </div>
      <div onClick={() => {
        setLang(en)
        setClass2("active_2")
        setClass("off")
      }} className={clas_2}>
        EN
      </div>
      <TranslateContext.Provider value={lang}>
        <Header />
        <Section />
        <Order />
        <Posts />
        <Footer />
      </TranslateContext.Provider>

    </div>
  );
}

export default App;
