import { useState } from "react";

export function useForm(initialValue,submitCallBack){
    const [values,setValues] = useState(initialValue)

    const changeHandler = (e) =>{
        setValues(state=>({
            ...state,
            [e.target.name] : e.target.value
        }))
    }
    
    const submitHandler = (e) =>{
        e.preventDefault()
        submitCallBack(values)
        setValues(initialValue)
    }

    return {values,changeHandler,submitHandler}
}