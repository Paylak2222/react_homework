import { error } from "../actions/doctorsAction";
import { DoctorTypes } from "../types";

const initData={
    list:[],
    error:"",
    loading:false
}

export default function(state = initData,action){
    const {type,payload} = action;
    switch (type) {
        case DoctorTypes.REQUEST:
            return{
                ...state,
                loading:true
            }
        case DoctorTypes.RESOLVE:
            return {
                ...state,
                list:payload,
                error:null,
                loading:false
            } 
        case DoctorTypes.REJECT:
            return {
                ...state,
                list:[],
                error:error,
                loading:false
            }
        default:
            break;
    }
    return state;
}