import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ThemeContext } from '../contextApi/ThemeContext';
import styles from '../model/listModel.module.css'

const ModelComponent = (props) => {
  const todoText = useContext(ThemeContext)
  const [show, setShow] = useState(false);


  const EditHandler = (editableItem, Index) => {
        // console.log(Index)
        setShow(true)
        todoText[0][1](editableItem.todoContent)
        todoText[3][1](Index)
        console.log(todoText[3][0])
  }


  const upDateHandler = ()=> {
    const updateTodo = {
      todoContent:todoText[0][0]
    }
    let upDatedTodos = todoText[1][0].map( (todoItem, index)=>{
      if(index+1 == todoText[3][0]){
        return updateTodo
      } else {
        return todoItem
      }
    })
    todoText[1][1](upDatedTodos)
    setShow(false);
    todoText[0][1]("")
  }

  const DeleteHandler = (deleteItem, Index) => {
    console.log(Index)
    let FilteredTodos = todoText[1][0].filter( (todoItem, index)=> index+1 !==  Index)
    todoText[1][1](FilteredTodos)
  }

  const DeleteFromCompleteHandler = (deleteItem, Index) => {
    console.log(Index)
    let FilteredTodos = todoText[5][0].filter( (todoItem, index)=> index+1 !==  Index)
    todoText[5][1](FilteredTodos)
  }

  const DoneTaskHandler = (doneTaske, Index) => {
    const doneFilter = todoText[1][0].filter((item, index)=>{
      if(index+1 !== Index){
        return item
      }else {
        todoText[5][1]([...todoText[5][0], item])
        console.log("Not Matched Item",todoText[5][0])
      }
    } )
    // console.log(doneFilter)
     todoText[1][1](doneFilter)
    // console.log(todoText[5][0])
  }

  return (
    <>
        { todoText[1][0].length > 0 ?
            todoText[1][0].map((item, index)=> {
                return(
                    <div className={` ${styles.mainListContainer} `}>
                      <div>
                         <p> <span className={` ${styles.spanId} `}> <b>{index+1}</b> </span> Your input Value is <b>{item.todoContent}</b></p> 
                      </div>
                      <div> 
                        <button className={`${styles.editBtn}`} onClick={() => EditHandler(item,index+1)}>Edit</button>
                        <button className={`${styles.deleteBtn}`} onClick={() => DeleteHandler(item, index+1)}>Delete</button>
                        <button className={`${styles.doneTaskBtn}`} onClick={() => DoneTaskHandler(item, index+1)}>Done</button>
                      </div>
                    </div>
                )
            }) : <>
                <hr className={`${styles.horiZontalLine}`} />
                <div>
                  <h4>Now Add Your Todos...</h4>
                </div>
            </>
        }
      
      <hr className={`${styles.horiZontalLine}`} />
        <h2>Completed Tasks</h2>
        {
          todoText[5][0].map((item, index) => {
            return(
              <div className={` ${styles.mainListContainer} `}>
                      <div>
                         <p> <span className={` ${styles.spanId} `}> <b>{index+1}</b> </span> Your input Value is <b>{item.todoContent}</b></p> 
                      </div>
                      <div> 
                        <button className={`${styles.deleteBtn}`} onClick={() => DeleteFromCompleteHandler(item, index+1)}>Delete</button>
                      </div>
                    </div>
            )
          })
        }

          <Modal show={show} onHide={show}>
          <Modal.Header closeButton onClick={ () => setShow(false) }>
            <Modal.Title>Data Updation</Modal.Title>
          </Modal.Header>
          <Modal.Body> Update Your Data Below This Field: 
          {/* <input className={` ${styles.editInputdisable} `}  type="text" disabled  value={todoText[4][0]} onChange={ (e) => {todoText[4][1](e.target.value)} } /> */}
          <input className={` ${styles.editInputs} `} type="text"  value={todoText[0][0]} onChange={ (e) => {todoText[0][1](e.target.value)} } />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={ () => setShow(false) }>
              Close
            </Button>
            <Button variant="primary" onClick={upDateHandler}>
              Update Data
            </Button>
          </Modal.Footer>
        </Modal> 
        
    </>
  );
}

export default ModelComponent