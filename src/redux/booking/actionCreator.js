import { ADDBOOk, REMOVEBOOk } from "./actionType"

export const booking=(value)=>{
    return{
        type: ADDBOOk,
        payload:value
    }
}
export const removeBook=(id)=>{
    return {
        type:REMOVEBOOk,
        payload:id,
    };
    
}