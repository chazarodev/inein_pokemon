import React from 'react'
import styles from '../styles/Spinner.module.css'

const Spinner = () => {
  return (
    <div className='contenedor'>
        <span className={styles.loader}></span>
    </div>
  )
}

export default Spinner