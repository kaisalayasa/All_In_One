import React from 'react'
import Card from '../components/Card.jsx'
import styles from './HomePage.module.css'
import { Link } from 'react-router-dom'
function HomePage() {
  return (
    <>
    <div className={styles.main_container}>

        <div className={styles.hero_container}>
          <img src="https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2021/07/shutterstock_1697866075-scaled.jpg?resize=1%2C1&ssl=1" alt="" />
        </div>

        <div className={styles.text_container}>
            <h1> hi!, im Qais. this is my react Training Portfolio!</h1>
        </div>
        <div className={styles.card_container}>

        <Link to="/to-do-list">
          <Card description="A Simple to List app" projectName="To-Do-List" emoji="📝" /> 
        </Link>
        
        <Link to="/weather-app">
          <Card description="A simple Weather App" projectName="Weather App" emoji="☀️" /> 
        </Link>
        
        <Link to="/library-lab">
          <Card description="A Couple of Different Fun Libraries" projectName="Library Lab" emoji="📚" />
        </Link>

        <Link to="/coming-soon">
          <Card description="......" projectName="Coming soon" emoji="🚀" />
        </Link>

        <Link to="/coming-soon">
          <Card description="......" projectName="Coming soon" emoji="✨" />
        </Link>

        <Link to="/coming-soon">
          <Card description="......" projectName="Coming soon" emoji="💡" />
        </Link>

        </div>

    </div>
    </>
  )
}

export default HomePage