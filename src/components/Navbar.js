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
        <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
          <div className={styles.avatar} >
          <img src={require("./avatarr.png")} alt="img" />
          </div>
          <h3 className={styles.headerText}>lets ⚔️ strike off some todos</h3>
        </div>
        <button id="dark" style={{paddingRight: '20px', color: 'var(--text-color)'}} className={styles.doneBtn} onClick={handlemode}><i className="fa-regular fa-sun"></i></button>
      </div>
  
    </React.Fragment>
  )
}
