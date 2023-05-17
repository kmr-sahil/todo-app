import React from 'react'
import styles from "./style.module.css"

export default function DoneList(props) {
    const handleDelete = () => {
        props.setDoneList((props.doneList).filter((item) => item.id !== props.todoItem.id))
      }
    
      return (
        <div className={styles.todoitem} style={{opacity: '70%'}}>
            <h3 className={styles.task}><s style={{background: 'transparent'}}>{props.todoItem.name}</s></h3>
            <button className={styles.doneBtndlist}><i class="fa-solid fa-circle-check"></i></button>
            <button onClick={handleDelete} className={styles.doneBtndlist}><i class="fa-solid fa-trash-can"></i></button>
        </div>
      )
}
