import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteHomePageData, editHomePageData, submitHomePageData } from './Redux/Actions/homeActions'

const Home = () => {
    const [state,setState]=useState(null)
    const [editClick,setEditClick]=useState(false)
    const [editIndex,setEditIndex]=useState(null)

    const home = useSelector(state=>state?.homeReducer?.homeData)
    const dispatch=useDispatch()

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(editClick){
            dispatch(editHomePageData(home,state,editIndex))
            setEditClick(false)
        }else{
            dispatch(submitHomePageData(home,state))
        }
    }

    const handleChange=(e)=>{
        setState(e.target.value)
    }

    const onDeleteClick=(value)=>{
        dispatch(deleteHomePageData(home,value))
    } 

    const onEditClick=(value,i)=>{
        setState(value)
        setEditClick(true)
        setEditIndex(i)
    }
    return (
        <div>
            <p>TODO APP</p>
            <form
                onSubmit={handleSubmit}
            >
                <div>
                    <input onChange={handleChange} value={state} />
                </div>
                <button type="submit">{editClick ? "Edit":"Submit"}</button>
            </form>
            {home.length > 0 && 
                <table>
                    <th>
                        Todo list
                    </th>
                    <tbody>
                        {home?.map((data,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{data}</td>
                                    <td>
                                        <button type="button" onClick={()=>onEditClick(data,i)}>Edit</button>
                                        <button type="button" onClick={()=>onDeleteClick(data)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default Home