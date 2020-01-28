import {CALCULATE_BMI} from '../actions/type';


const initial_state={
    bmi:'',
}

export default (state=initial_state,action)=>{
    const {type,payload}= action
    console.log('action result in reducer',action);
    switch(type){
        case CALCULATE_BMI:
            return{
                ...state,
                bmi:payload
            }
        default:
            return state   
        
    }
}