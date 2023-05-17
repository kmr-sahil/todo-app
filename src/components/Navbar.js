import styles from "./style.module.css"
import React from 'react'

export default function Navbar() {

  const handlemode = () => {
    const btn = document.getElementById('dark')
    if(btn.innerHTML === `<i class="fa-regular fa-sun"></i>`){
      btn.innerHTML = `<i class="fa-solid fa-moon"></i>`
      document.body.classList.toggle(styles.darktheme)
    }
    else {
      btn.innerHTML = `<i class="fa-regular fa-sun"></i>`
      document.body.classList.toggle(styles.darktheme)
    }
    
  }

  return (
    <React.Fragment>
      <div className={styles.header}>
        <h1>Todo app</h1>
        <button id="dark" className={styles.doneBtn} onClick={handlemode}><i class="fa-regular fa-sun"></i></button>
      </div>
      
    </React.Fragment>
  )
}
