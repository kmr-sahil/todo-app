import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import styles from './style.module.css';
import DoneList from './DoneList';

export default function Create() {
  const [i, setI] = useState(new Date().getTime() + Math.random());
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [btnText, setBtnText] = useState(<i className="fa-solid fa-plus"></i>);

  useEffect(() => {
    const storedTodoList = localStorage.getItem('todoList');
    if (storedTodoList) {
      setTodoList(JSON.parse(storedTodoList));
    }

    const storedDoneList = localStorage.getItem('doneList');
    if (storedDoneList) {
      setDoneList(JSON.parse(storedDoneList));
    }
  }, []);

  useEffect(() => {
    const retriveTodoList = JSON.parse(localStorage.getItem('todoList'));
    if (retriveTodoList) {
      setTodoList(retriveTodoList);
    }
  }, []);

  useEffect(() => {
    const retriveDoneList = JSON.parse(localStorage.getItem('doneList'));
    if (retriveDoneList) {
      setDoneList(retriveDoneList);
    }
  }, []);

  useEffect(() => {
    if (todoList.length > 0) {
      localStorage.setItem('todoList', JSON.stringify(todoList));
    }
  }, [todoList]);

  useEffect(() => {
    if (doneList.length > 0) {
      localStorage.setItem('doneList', JSON.stringify(doneList));
    }
  }, [doneList]);

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleButton = (event) => {
    event.preventDefault();

    if (editTodo) {
      const updatedTodoList = todoList.map((item) =>
        item.id === editTodo.id ? { ...item, name: todo } : item
      );
      setTodoList(updatedTodoList);
      setEditTodo(null);
      setBtnText(<i className="fa-solid fa-plus"></i>);
    } else {
      setI(new Date().getTime() + Math.random());
      setTodoList([{ name: todo, id: i }, ...todoList]);
    }
    setTodo('');
  };

  return (
    <div className={styles.todoform}>
      <form className={styles.createBox}>
        <input className={styles.inp} type="text" onChange={handleChange} value={todo} placeholder='add Todo List'/>
        <button className={styles.btn} type="submit" onClick={handleButton} >{btnText}</button>
      </form>
      <div className={styles.pendinglist}>
        <p style={{ fontSize: '0.7rem', paddingLeft: '20px', color: 'var(--text-color)' }}>
          {todoList.length === 0 ? '' : `You have ${todoList.length} tasks left`}
        </p>
        {todoList.map((item) => (
          <TodoList
            key={item.id}
            todoList={todoList}
            todoItem={item}
            setTodo={setTodo}
            setTodoList={setTodoList}
            setDoneList={setDoneList}
            doneList={doneList}
            setEditTodo={setEditTodo}
            setBtnText={setBtnText}
          />
        ))}
      </div>
      <div>
        <p style={{ fontSize: '0.7rem', paddingLeft: '20px', color: 'var(--text-color)' }}>
          {doneList.length === 0 ? '' : `You have completed ${doneList.length} tasks`}
        </p>
        {doneList.map((item) => (
          <DoneList 
          key={item.id}
          todoItem={item}
          setDoneList={setDoneList}
          doneList={doneList}
          setTodoList={setTodoList} />
        ))}
      </div>
    </div>
  );
}
