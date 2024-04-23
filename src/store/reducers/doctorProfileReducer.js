import { error } from "../actions/doctorsAction";
import { DoctorProfileTypes } from "../types";

const initData={
    data:[],
    error:"",
    loading:true
}

export default function(state = initData,action){
    const {type,payload} = action;
    switch (type) {
        case DoctorProfileTypes.REQUEST:
            return{
                ...state,
                loading:true
            }
        case DoctorProfileTypes.RESOLVE:
            return {
                ...state,
                data:payload,
                error:null,
                loading:false
            } 
        case DoctorProfileTypes.REJECT:
            return {
                ...state,
                data:null,
                error:error,
                loading:false
            }
        default:
            break;
    }
    return state;
}