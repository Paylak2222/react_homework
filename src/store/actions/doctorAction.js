import { DoctorTypes } from "../types"

function setUser(payload) {
    return{
        type:DoctorTypes.DOC,
        payload
    }
}

function getDoctor(payload){
    return{
        type:DoctorTypes.GET_DOC,
        payload
    }
}


export {setUser,getDoctor}