import React from 'react'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className='heading'>
        <hgroup className={styles.header}>
            <h1>Pokemon</h1>
        </hgroup>
    </header>
  )
}

export default Header