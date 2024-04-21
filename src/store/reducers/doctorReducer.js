import { DoctorTypes } from "../types";

const initData={
    
}

export default function(state = initData,action){
    const {type,payload} = action;
    switch (type) {
        case DoctorTypes.DOC:
            return payload; 
        case DoctorTypes.GET_DOC:
            return payload.data
        default:
            break;
    }
    return state;
}