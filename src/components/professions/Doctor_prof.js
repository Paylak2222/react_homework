import Translate from "../translate/Translate";

let doc_prof = [
    {
        id:"1",
        prof_name:"Терапевт",
        prof_desc:"Терапевт, специалист общего профиля",
        prof_logo:"./prof_logo_1.jpg"
    },
    {
        id:"2",
        prof_name:"Педиатр",
        prof_desc:"Врач широкой специализации, работающий с детьми и подростков",
        prof_logo:"./prof_logo_2.jpg"
    },
    {
        id:"3",
        prof_name:"Кардиолог",
        prof_desc:"Занимается болезнями сердечно-сосудистой системы",
        prof_logo:"./prof_logo_3.jpg"},
]

// const doc_prof_en=[
//     {
//         id:"1",
//         prof_name:"Therapist",
//         prof_desc:"Therapist, general specialist",
//         prof_logo:"./prof_logo_1.jpg"
//     },
//     {
//         id:"2",
//         prof_name:"Pediatrician",
//         prof_desc:"Doctor of broad specialization working with children and adolescents",
//         prof_logo:"./prof_logo_2.jpg"
//     },
//     {
//         id:"3",
//         prof_name:"Cardiologist",
//         prof_desc:"Deals with diseases of the cardiovascular system",
//         prof_logo:"./public/prof_logo_3.jpg"},
// ]

// const doc_prof_ru=[
//     {
//         id:"1",
//         prof_name:"Терапевт",
//         prof_desc:"Терапевт, специалист общего профиля",
//         prof_logo:"./prof_logo_1.jpg"
//     },
//     {
//         id:"2",
//         prof_name:"Педиатр",
//         prof_desc:"Врач широкой специализации, работающий с детьми и подростков",
//         prof_logo:"./prof_logo_2.jpg"
//     },
//     {
//         id:"3",
//         prof_name:"Кардиолог",
//         prof_desc:"Занимается болезнями сердечно-сосудистой системы",
//         prof_logo:"./prof_logo_3.jpg"},
// ]


// function doc(ln){
//     if (ln == Translate.en) {
//         doc_prof = doc_prof_en;
//         return doc_prof;
//      }else{
//         doc_prof = doc_prof_ru;
//         return doc_prof;
//      }
// }

export {doc_prof}
