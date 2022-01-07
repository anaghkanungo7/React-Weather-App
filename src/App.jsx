import axios from 'axios';
import React, { useState } from 'react';
// Styled Component Library
import styled from 'styled-components';
// Custom components
import CityCard from './components/CityCard';
import WeatherInfoCard from './components/WeatherInfoCard';

export const WeatherIcons = {
  "01d": "icons/sunny.svg",
  "01n": "icons/night.svg",
  "02d": "icons/day.svg",
  "02n": "icons/cloudy-night.svg",
  "03d": "icons/cloudy.svg",
  "03n": "icons/cloudy.svg",
  "04d": "icons/perfect-day.svg",
  "04n": "icons/cloudy-night.svg",
  "09d": "icons/rain.svg",
  "09n": "icons/rain-night.svg",
  "10d": "icons/rain.svg",
  "10n": "icons/rain-night.svg",
  "11d": "icons/storm.svg",
  "11n": "icons/storm.svg",
  "13d": "icons/snow.png",
  "13n": "icons/snow.png",
  "50d" : "icons/mist.png",
  "50n" : "icons/mist.png"
};

const Container = styled.div`
display: flex;
flex-direction: column;
margin: auto;
margin-top: 20px;
align-items: center;
box-shadow: 0 3px 6px 0 #555;
padding: 20px 10px; 
border-radius: 4px;
width: 380px;
background: white;
font-family: Montserrat;
`;

// const CityComponent = styled.div`
// display: flex;
// flex-direction: column
// `;

// const WeatherInfoComponent = styled.div`
// display: flex;
// flex-direction: column
// `;

const Label = styled.span`
color: black;
font-size: 18px;
font-weight: bold;
font-family: Montserrat;
`;

const App = () => {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  // const parsedCity = city.split(" ").join("%20");
  // console.log(parsedCity);

  // Sample API Key
  const API_KEY = "5dd34e236d943aff592360fadd721fc1";


  const fetchWeather = async (e) => {
    e.preventDefault();
    console.log("Fetch weather is run!!");
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

    console.log(response);
    updateWeather(response.data);
  }

  return (
    <Container>
      <Label>RapidWeather - React Weather App</Label>
      {weather? (
         <WeatherInfoCard weather={weather}>Weather Component</WeatherInfoCard>
      ) : (<CityCard updateCity={updateCity} fetchWeather={fetchWeather}>City Component</CityCard>)
    }
    </Container>
  )
}

export default App;
