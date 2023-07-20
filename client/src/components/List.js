import React from 'react';
import { AiTwotoneEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import axios from "axios";
import "./list.css";
import { deleteTask } from '../slice';
import {useDispatch} from "react-redux";

const List = ( {id,task,setUpdateUI,updateMode}) => {
  const dispatch=useDispatch();

    const removeTask=()=>{
       axios.delete(`http://localhost:5000/api/v1/task/${id}`).then((res)=>{
            // console.log(res);
            setUpdateUI((prev)=> !prev);
            dispatch(deleteTask(id))
        })
       
    }
    // console.log(id)
  return (
    <li className='task'>
        {task}
        <span className='iconHolder'>
          <AiTwotoneEdit  onClick={()=>updateMode(id,task)}/>
          <BsFillTrashFill onClick={removeTask}/>
        </span>
    </li>
  )
}

export default List