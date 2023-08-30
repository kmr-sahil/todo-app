import styles from "./style.module.css";
import React, { useState, useEffect } from 'react';
import avatar from "../assets/avatarr.png";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add(styles.darktheme);
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove(styles.darktheme);
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <React.Fragment>
      <div className={styles.header}>
        <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
          <div className={styles.avatar} >
            <img src={avatar} alt="img" />
          </div>
          <h3 className={styles.headerText}>lets ⚔️ strike off some todos</h3>
        </div>
        <button
          id="dark"
          style={{paddingRight: '20px', color: 'var(--text-color)'}}
          className={styles.doneBtn}
          onClick={toggleTheme}
        >
          {darkMode ? <i className="fa-solid fa-moon"></i> : <i className="fa-regular fa-sun"></i>}
        </button>
      </div>
    </React.Fragment>
  );
}
