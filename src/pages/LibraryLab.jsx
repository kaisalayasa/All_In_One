import React, { useEffect, useState } from 'react';
import styles from './LibraryLab.module.css';
import Celebration from '../components/Celebration';
import DrawingBoard from '../components/canvas';
import TiltCard from '../components/TiltCard';
import Animations from '../components/Animations';

function WeatherPage() {

    const[option,setOption]= useState(null);




    const handleOption = (e) => {
      setOption(e.target.value);
      
    };
    

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.header}>
          <h1>Library Lab</h1>
          <p>A test space for a couple of different fun libraries</p>
        </div>

        <section className={styles.project_container}>
            {option === null && (

              <>
               <Celebration></Celebration>
            
                <div className={styles.main_div}>
           
                <h1>select a library</h1>
                
                
                <select name="Library" id="Library" value={option ?? ""} onChange={handleOption}>
                <option value="" disabled></option>
                <option value="Animations">Animations</option>
                <option value="Tilt">Tilt</option>
                <option value="Drawing Board">Drawing Board</option>
              </select>

                     
                </div>
            
              
              </>
            )}
            
            
            
           
            {option === "Drawing Board" && (
              <>
              
              <div className={styles.librarySelect}>
              <label htmlFor="Library">Change Library: </label>
              <select name="Library" id="Library" value={option ?? ""} onChange={handleOption}>
                <option value="" disabled>Select a library</option>
                <option value="Animations">Animations</option>
                <option value="Tilt">Tilt</option>
                <option value="Drawing Board">Drawing Board</option>
              </select>



                            </div>
               <DrawingBoard ></DrawingBoard>
               </>

            )}

            

            {option === "Animations" && (
                          <>
                  
                          
                            
                            <div className={styles.librarySelect}>
                            <label htmlFor="Library">Change Library: </label>
                            <select name="Library" id="Library" value={option ?? ""} onChange={handleOption}>
                            <option value="" disabled>Select a library</option>
                            <option value="Animations">Animations</option>
                            <option value="Tilt">Tilt</option>
                            <option value="Drawing Board">Drawing Board</option>
                          </select>


                            </div>
                        <Animations/>
                          </>

                        )}

            {option === "Tilt" && (
                          <>
                          
                          <div className={styles.librarySelect}>
                          <label htmlFor="Library">Change Library: </label>
                          <select name="Library" id="Library" value={option ?? ""} onChange={handleOption}>
                          <option value="" disabled>Select a library</option>
                          <option value="Animations">Animations</option>
                          <option value="Tilt">Tilt</option>
                          <option value="Drawing Board">Drawing Board</option>
                        </select>


                           </div>

                          
                          <TiltCard/>
                          </>

                        )}


           
                      

        </section>

        <section className={styles.overview}>
          <h1>Overview</h1>
          <p>Library Lab is me experimenting with implementing libraries in React and learning how to build interactive components. 
            I used <strong>react-spring</strong> for smooth animations, <strong>react-parallax-tilt</strong> to create a 3D card effect, 
            and built a <strong>canvas-based drawing board</strong> for freehand sketching using HTML5 Canvas. 
            I also used props to pass functions between components and manage dynamic switching using state and conditional rendering.
          </p>
        </section>

        <section className={styles.tech_used}>
          <h1>Technologies Used</h1>
          <div className={styles.tech}>
          <p>React</p>
          <p>JavaScript</p>
          <p>CSS Modules</p>
          <p>React Spring</p>
          <p>React Parallax Tilt</p>
          <p>React Canvas Draw</p>
                </div>
        </section>

        <section className={styles.key_learning}>
          <h1>Key Learnings</h1>
          <p> This project reinforced my understanding of state control and conditional rendering in React.
            It also helped me get more familiar with reading documentation and integrating third-party libraries.
            Additionally, I gained more confidence in passing functions through props and organizing components in a modular way.
          </p>
        </section>
      </div>
    </>
  );
}

export default WeatherPage;
