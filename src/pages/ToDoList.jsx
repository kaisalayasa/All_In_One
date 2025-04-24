import React, { useState } from 'react'

import styles from './ToDoList.module.css'
import Task from '../components/task'
function ToDoList() {

const [tasks,setTasks] = useState([])
const [newTask,setNewTask]= useState({title:"",desc:""})


const handleChange= (e)=>{
    const {name,value} =e.target
    setNewTask(prev =>({...prev, [name]:value}))

}

const taskDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  
  const addTask = () => {
    if (newTask.title === "") {
        window.alert("A title is required for the task");
        return;
    }

    if (tasks.length > 6) {
        window.alert("Can't add more tasks, please remove a task");
        return;
    }

    setTasks(prev => [...prev, newTask]);
    setNewTask({ title: "", desc: "" });
};




  return (
    <>
    <div className={styles.layout}>

        <div className={styles.header}>
            <h1>To-Do-List App</h1>
            <p>A simple to list app</p>
        </div>
    

   
    <section className={styles.project_container}>
        <div className={styles.input_container}>
            <input type="text" placeholder='Task Title' onChange={handleChange} value ={newTask.title} name="title"/>
            <input type="text" placeholder='Description' onChange={handleChange} value ={newTask.desc}  name="desc" />
            <button onClick={addTask}>+</button>
            
        </div>
        <div className={styles.task_container}>
        {tasks.map((task, index) => (
  <Task title={task.title} desc={task.desc} key={index} taskDelete={()=>taskDelete(index)} />
))}





     
       
        </div>

       
    </section>
    

    <section className={styles.overview}>
        <h1>Overview</h1>
        <p>
            This is a simple and functional To-Do List application built with React. 
            Users can add tasks with a title and optional description, and delete them as needed. 
            The app limits the number of tasks to encourage focus and simplicity, and alerts the user if they exceed the limit or forget to add a title.
        </p>

    </section>

    <section className={styles.tech_used}>
        <div>
         <h1>Technologies Used</h1>
        </div>
        <div className={styles.tech}>
            <p>react</p>
            <p>css</p>
            <p>javaScript</p>
        </div>
       


    </section>


    <section className={styles.key_learning}>
        <h1>Key Learnings</h1>
        <p>
            This project helped me practice managing form state using <code>useState</code> and handling user input dynamically with controlled components. 
            I reinforced concepts like mapping over arrays to render components, deleting items by index, and conditionally updating state. 
            I also worked with props to pass functions like <code>taskDelete</code> to child components, improving my understanding of data flow in React.
        </p>

    </section>

   
    </div>
    </>
   
  )
}

export default ToDoList