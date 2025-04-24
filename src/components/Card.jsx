import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'
function card({description,projectName,emoji}) {
  return (

    <>
    
    <div className={styles.main_container}>
        <div className={styles.emoji_container}>
            {emoji}
        </div>
        <div className={styles.info_container}>
            <h2>
                {projectName}
            </h2>
            <h3>
                {description}
            </h3>
            
            
            </div>




    </div>
    </>
  )
}

export default card