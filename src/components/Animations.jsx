import React, { useState } from 'react'
import { useSpring, animated, config } from '@react-spring/web'
import styles from './Animations.module.css'

function Animations() {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }))
  const [step, setStep] = useState(0)

  const positions = [200, 0, -200, 0] 

  const handleClick = () => {
    const nextStep = (step + 1) % positions.length
    setStep(nextStep)
    api.start({
      to: { x: positions[nextStep] },
      config: config.wobbly,
    })
  }

  return (
    <div className={styles.container}>
      <animated.div
        onClick={handleClick}
        className={styles.square}
        style={{
          transform: springs.x.to(x => `translateX(${x}px)`),
        }}
      >
        <h1>Click me ;3</h1>
      </animated.div>
    </div>
  )
}

export default Animations
