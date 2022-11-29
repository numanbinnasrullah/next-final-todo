import React, { useContext } from 'react'
import { ThemeContext } from '../contextApi/ThemeContext'
import ModelComponent from '../model/Model'
import styles from '../model/listModel.module.css'

const TodoApp = () => {
    const todoText = useContext(ThemeContext)
    // console.log(todoText)
   
    const submitHandler = () => {
      if(!todoText[0][0]){
        alert("Please Enter Todo Must")
      }else {
        const newData = {
          todoContent:todoText[0][0],
      }
      todoText[1][1]([...todoText[1][0], newData])
      todoText[0][1]("") 
      } 
    }


  return (
    <div className={` ${styles.todoMainContainer} `}>
        <input className={` ${styles.Inputs} `} type="text" value={todoText[0][0]} onChange={ (e) => {todoText[0][1](e.target.value)}  } placeholder="Enter Your Todo ..." /> <br />
        <button className={` ${styles.InputBtn} `} onClick={submitHandler}>Add Todo</button>
        <ModelComponent />
    </div>
  )
}

export default TodoApp
