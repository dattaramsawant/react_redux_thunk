import { DELETE_HOME_DATA, EDIT_HOME_DATA, SUBMIT_HOME_DATA } from "../types"

export const submitHomePageData=(state,data)=>dispatch =>{
    const payload=[...state,data]
    dispatch({
        type:SUBMIT_HOME_DATA,
        payload:payload
    })
}

export const deleteHomePageData=(data,value)=>dispatch=>{
    const payload=data?.filter(item=>{
        return item !== value
    })
    dispatch({
        type:DELETE_HOME_DATA,
        payload:payload
    })
}

export const editHomePageData=(data,value,index)=>dispatch=>{
    var data1=data
    data1[index] = value

    dispatch({
        type:EDIT_HOME_DATA,
        payload:data1
    })
}