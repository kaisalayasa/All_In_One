import React, { useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import { useWindowSize } from 'react-use';
import styles from "./canvas.module.css"

function DrawingBoard() {

  const { width, height } = useWindowSize();
  const canvasRef = useRef(null);

  const handleUndo=()=>{
    canvasRef.current.undo()
  }
  const handleClear=()=>{
    canvasRef.current.clear()
  }

  
  return (
    <>
   
   <div  className={styles.container}>
        <div className={styles.buttons}>
       
        <button  name="undo_btn" onClick={handleUndo}>↶</button>
       
        <button onClick={handleClear}>✖</button>
      </div>
    </div>

      <CanvasDraw 
        ref={canvasRef}
        canvasHeight={height}
        canvasWidth={width}
        hideGrid= {true}
      
      />
     

    </>
  );
}

export default DrawingBoard;
