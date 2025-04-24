import React, { useState } from 'react'
import styles from './Task.module.css'
function Task({title,desc,taskDelete}) {

const [isEditing,setIsEditing]= useState(false)

const [editData,setEditData]= useState({newTitle:title,newDesc:desc})

const confirmUpdates= ()=>{
    setIsEditing(false)

    

}
const editButton=()=>{
    setIsEditing(true)
}

const handleChange= (e)=>{
    const {name,value} = e.target
    setEditData(prev => ({...prev,[name]:value}))

}


return (
    <div className={styles.task_container}>
        <h2>{isEditing ? <>
        <input type="text" onChange={handleChange} name='newTitle' value={editData.newTitle}/>
        
        
        </>:editData.newTitle}</h2>
        <p>{isEditing? <>
            <input type="text" onChange={handleChange} name='newDesc' value={editData.newDesc}/>
            <hr />
        <button onClick={confirmUpdates}>confirm</button>
        </>
            :editData.newDesc}</p>
        <div className={styles.buttons}>
           
            <button onClick={editButton}>Edit</button>
            <button onClick={taskDelete}>Remove</button>
        </div>
        
    </div>
)
}

export default Task