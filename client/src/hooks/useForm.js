import { useEffect, useState } from "react";

export function useForm(initialValue,submitCallBack){
    const [values,setValues] = useState(initialValue)

    useEffect(()=>{
        setValues(initialValue)
    },[initialValue])

    const changeHandler = (e) =>{
        setValues(state=>({
            ...state,
            [e.target.name] : e.target.value
        }))
    }
    
    const submitHandler = async (e) =>{
        e.preventDefault()
        await submitCallBack(values)
        setValues(initialValue)
    }

    return {values,changeHandler,submitHandler}
}