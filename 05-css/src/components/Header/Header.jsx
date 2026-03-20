import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.head}>
      <ul className={styles.list}>
        <li>Home</li>
        <li>About</li>
        <li>Conact</li>
        <li>Search</li>
      </ul>
    </div>
  )
}

export default Header
