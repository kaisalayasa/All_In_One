import React from 'react';
import Tilt from 'react-parallax-tilt';
import styles from './TiltCard.module.css';

function TiltCard() {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor="#ffffff"
      glarePosition="all"
      scale={1.05}
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      transitionSpeed={1000}
    >
      <div className={styles.card}>
        <h1 className={styles.heading}>Move your mouse for a cool tilt!</h1>
        <p className={styles.subtext}> This card reacts to your movement ;3</p>
      </div>
    </Tilt>
  );
}

export default TiltCard;
