import React from 'react';
import styles from './style.module.css';

export default function TodoList(props) {
  const handleEdit = () => {
    props.setEditTodo(props.todoItem);
    props.setTodo(props.todoItem.name);
    props.setBtnText(<i className="fa-solid fa-angles-up"></i>);
  };

  const handleDone = () => {
    //props.setDoneList([(props.todoList).filter((item) => item.id === props.todoItem.id)[0], ...props.doneList]);
    //props.setTodoList((props.todoList).filter((item) => item.id !== props.todoItem.id));
//
    //localStorage.setItem('todoList', JSON.stringify(props.todoList));
    //localStorage.setItem('doneList', JSON.stringify(props.doneList));

    const undoneItem = props.todoItem;
    props.setDoneList((prevTodoList) => [undoneItem, ...prevTodoList]);
    handleDelete()
  };

  const handleDelete = () => {
    const updatedTodoList = (props.todoList).filter((item) => item.id !== props.todoItem.id);
    props.setTodoList(updatedTodoList);

    localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
  };

  return (
    <div className={styles.todoitem}>
      <button onClick={handleDone} className={styles.doneBtn}><i className="fa-regular fa-circle"></i></button>
      <h3 className={styles.task}>{props.todoItem.name}</h3>
      <button onClick={handleEdit} className={styles.doneBtn}><i className="fa-solid fa-pen-to-square"></i></button>
      <button onClick={handleDelete} className={styles.doneBtn}><i className="fa-solid fa-trash-can"></i></button>
    </div>
  );
}
