import React from 'react'
import styles from "./style.module.css"

export default function DoneList(props) {
    const handleDelete = () => {
        props.setDoneList((props.doneList).filter((item) => item.id !== props.todoItem.id))
      }
    
      return (
        <div className={styles.todoitem} style={{opacity: '80%'}}>
          <button className={styles.doneBtn}><i className="fa-solid fa-circle-check"></i></button>
            <h3 className={styles.task}><s style={{background: 'transparent'}}>{props.todoItem.name}</s></h3>
            <button disabled style={{opacity: "0%"}} className={styles.doneBtn}><i className="fa-solid fa-pen-to-square"></i></button>
            <button onClick={handleDelete} className={styles.doneBtn}><i className="fa-solid fa-trash-can"></i></button>
        </div>
      )
}