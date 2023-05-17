import React from 'react'
import styles from "./style.module.css"


export default function TodoList(props) {

  const handleEdit = () => {
    props.setEditTodo(props.todoItem);
    props.setTodo(props.todoItem.name);
    props.setBtnText("Update")
  };
  
  const handleDone = () => {
    props.setDoneList([(props.todoList).filter((item) => item.id === props.todoItem.id)[0], ...props.doneList])
    props.setTodoList((props.todoList).filter((item) => item.id !== props.todoItem.id))
  }

  const handleDelete = () => {
    props.setTodoList((props.todoList).filter((item) => item.id !== props.todoItem.id))
  }

  return (
    <div className={styles.todoitem}>
        <h3 className={styles.task}>{props.todoItem.name}</h3>
        <button onClick={handleDone} className={styles.doneBtn}><i class="fa-regular fa-circle"></i></button>
        <button onClick={handleDelete} className={styles.doneBtn}><i class="fa-solid fa-trash-can"></i></button>
        <button onClick={handleEdit} className={styles.doneBtn}><i class="fa-solid fa-pen-to-square"></i></button>  
    </div>
  )
}
