import React, { useEffect, useState } from 'react';
import styles from './WeatherPage.module.css';


function WeatherPage() {
  const API_KEY = "2108a4ca762e2a84f662f4affcbe4fb6";
  const [cityName, setCityName] = useState('new york');
  const [temperature, setTemperature] = useState(null);
  const [condition, setCondition] = useState('');
  const [humidity, setHumidity] = useState('');
  const [windSpeed, setWindSpeed] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [feelsLike, setFeelsLike] = useState('');
  const [icon, setIcon] = useState(null);
  const [input, setInput] = useState('');

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );

      if (!response.ok) {
        window.alert("City not found. Please try again.");
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      
      setCityName(city);
      setTemperature((data?.main?.temp - 273.15).toFixed(1));
      setCondition(data?.weather?.[0]?.description);
      setHumidity(data?.main?.humidity);
      setWindSpeed(data?.wind?.speed);
      setFeelsLike((data?.main?.feels_like - 273.15).toFixed(1));
      setMinTemp((data?.main?.temp_min - 273.15).toFixed(1));
      setMaxTemp((data?.main?.temp_max - 273.15).toFixed(1));
      setIcon(`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@4x.png`);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeather('new york');
  }, []);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleBtn = () => {
    if (!input.trim()) {
      window.alert("Please enter a city name");
      return;
    }
    fetchWeather(input.trim().toLowerCase());
  };

  function capitalizeWords(str) {
    return str
      .toLowerCase()
      .split(' ')
      .map(word => word[0]?.toUpperCase() + word.slice(1))
      .join(' ');
  }

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.header}>
          <h1>Weather App</h1>
          <p>A simple weather app using an API</p>
        </div>

        <section className={styles.project_container}>

      

          <div className={styles.weather_card_container}>
            <div className={styles.input_container}>
              
              <input
               
                type="text"
                placeholder=" City"
                onChange={handleInput}
                value={input}
              />
              <br />

              

              <br />
              <button onClick={handleBtn}>Submit</button>
            </div>

            <div className={styles.result_container}>
              <div className={styles.weather_card}>
                <div className={styles.location}>
                  <h2>City: {capitalizeWords(cityName)}</h2>
                  {icon && (
                    <img
                      src={icon}
                      alt="Weather Icon"
                      className={styles.weather_icon}
                    />
                  )}
                </div>

                <div className={styles.stats}>
                  <p><strong>Temperature:</strong> {temperature}°C</p>
                  <p><strong>Condition:</strong> {capitalizeWords(condition)}</p>
                  <p><strong>Feels Like:</strong> {feelsLike}°C</p>
                  <p><strong>Humidity:</strong> {humidity}%</p>
                  <p><strong>Wind Speed:</strong> {windSpeed} m/s</p>
                  <p><strong>Min Temp:</strong> {minTemp}°C | <strong>Max Temp:</strong> {maxTemp}°C</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.overview}>
          <h1>Overview</h1>
          <p>
            This project is a simple React weather app that uses the OpenWeatherMap API to fetch and display real-time weather data.
            Users can enter a city name to get current weather conditions, including temperature, humidity, wind speed, and more.
            The app converts temperatures from Kelvin to Celsius and displays a weather icon based on the API response.
          </p>
        </section>

        <section className={styles.tech_used}>
          <h1>Technologies Used</h1>
          <div className={styles.tech}>
          <p>React</p>
          <p>JavaScript</p>
          <p>CSS Modules</p>
          <p>OpenWeatherMap API</p>
          </div>
        </section>

        <section className={styles.key_learning}>
          <h1>Key Learnings</h1>
          <p>
            This project helped me strengthen my understanding of handling API requests in React using async/await and the Fetch API.
            I learned how to manage state effectively using useState, useEffect, and conditional rendering.
            I also practiced working with dynamic inputs, data transformation (Kelvin to Celsius), and displaying icons and values based on JSON data from an external API.
          </p>

        </section>
      </div>
    </>
  );
}

export default WeatherPage;
