import React from 'react';
import styles from './style.module.css';

export default function DoneList(props) {
  const handleDelete = () => {
    const updatedDoneList = (props.doneList).filter((item) => item.id !== props.todoItem.id);
    props.setDoneList(updatedDoneList);

    localStorage.setItem('doneList', JSON.stringify(updatedDoneList));
  };

  const handleUndone = () => {

    const undoneItem = props.todoItem;
    props.setTodoList((prevTodoList) => [undoneItem, ...prevTodoList]);
    
    handleDelete(); // Remove the item from DoneList
  }

  return (
    <div className={styles.todoitem} style={{ opacity: '80%' }}>
      <button onClick={handleUndone} className={styles.doneBtn}><i className="fa-solid fa-circle-check"></i></button>
      <h3 className={styles.task}><s style={{ background: 'transparent' }}>{props.todoItem.name}</s></h3>
      <button onClick={handleDelete} className={styles.doneBtn}><i className="fa-solid fa-trash-can"></i></button>
    </div>
  );
}
