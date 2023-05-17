import React from 'react'
import { useState } from 'react'
import TodoList from './TodoList'
import styles from "./style.module.css"
import DoneList from './DoneList'

export default function Create() {
    const [i, setI] = useState(1)
    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])
    const [doneList, setDoneList] = useState([])
    const [editTodo, setEditTodo] = useState("");
    const [btnText, setBtnText] = useState("Add")


    const handleChange = (event) => {
        setTodo(event.target.value)
    }
    const handleButton = (event) => {
        /*setI(i+1)
        event.preventDefault()
        setTodo("")
       setTodoList([{name: todo, id: i}, ...todoList])
       console.log(todoList)
       console.log(i)*/
       event.preventDefault();
       console.log(editTodo)
        if (editTodo) {
        // update existing todo
        const updatedTodoList = todoList.map((item) => {
          if (item.id === editTodo.id) {
            return { ...item, name: todo };
          }
          return item;
        });
        setTodoList(updatedTodoList);
        setEditTodo(null);
        setBtnText("Add")
      } else {
        // add new todo
        setI(i + 1);
        setTodoList([{ name: todo, id: i }, ...todoList])
      }
      setTodo("")
    }
  return (
    <div className={styles.todoform}>
        <form className={styles.createBox}>
              <input className={styles.inp} type="text" onChange={handleChange} value={todo} placeholder='add Todo List'/>
              <button className={styles.btn} type="submit" onClick={handleButton} >{btnText}</button>
          </form>
          <p style={{fontSize: '1rem', fontWeight: 'bold',alignSelf: 'flex-start',paddingInline: '16%'}}>{todoList.length === 0 ? '': `You have ${todoList.length} tasks left`}</p>
        {todoList.map((item)=>(
        <TodoList todoList={todoList} todoItem={item} setTodo={setTodo} setTodoList={setTodoList} setDoneList={setDoneList} doneList={doneList} setEditTodo={setEditTodo} setBtnText={setBtnText}/>
        ))}
          <p style={{fontSize: '1rem', fontWeight: 'bold',alignSelf: 'flex-start',paddingInline: '16%', margin: '20px 0'}}>{doneList.length === 0 ? '': `You have completed ${doneList.length} tasks`}</p>
          
          {doneList.map((item)=>(
        <DoneList  todoItem={item} setDoneList={setDoneList} doneList={doneList}/>
        ))}
    </div>
  )
}
