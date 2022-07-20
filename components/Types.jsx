import React from 'react'
import styles from '../styles/Types.module.css'

const Types = ({type}) => {

    const {type: {name}} = type

    return (
        <div className={name}>
            <p className={styles.type}>{name}</p>
        </div>
    )
}

export default Types