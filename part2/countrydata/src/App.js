import React, { useState, useEffect } from "react"
import axios from 'axios'

function Country ({country}) {
  const [ weather, setWeather ] = useState([])

  const hookWeather = () => {
    const api_key = process.env.REACT_APP_API_KEY
      axios
      .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.name.common}`)
      .then(reponse => {
        setWeather(reponse.data)
      })
      
  }
  
  // eslint-disable-next-line
  useEffect(hookWeather, [])

  return(
    <>
      <h1>{country.name.common}</h1>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>

        <h4>languages</h4>
        <ul>
          {
            Object.entries(country.languages).map(([key, value]) => 
              <li key={key}>{value}</li>
           )
          }
        </ul>

        <img src={country.flags.png} alt={country.flags.alt} height="100"/>
        <h2>Weather in {country.name.common}</h2>
        <Weather weather={weather}/>
        
    </>
  )
}

function Weather({weather}){
  if(weather.current){
    return(
      <>
        <p><b>temperature:</b> {weather.current.temperature} Celcius</p>
        <img src={weather.current.weather_icons[0]} alt={weather.current.weather_descriptions[0]} height="50"/>
        <p><b>wind:</b> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
      </>
    )
  }
    
}

function Button({handler}){
  return <button onClick={handler}>show</button>
}

function App() {
  const [ countries, setCountries ] = useState([])
  const [ filterString, setFilterString ] = useState('')
  
  const handleFilterCountryChange = (event) => setFilterString(event.target.value)

  const hookCountries = () => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(reponse => {
      setCountries(reponse.data)
    })
  }
  
  
  useEffect(hookCountries, [])

  const filterDataCountry = (filteredData) => {
    if(filteredData.length === 0)
     return <p>No search founded</p>
    else if(filteredData.length === 1)
      return <Country country={filteredData[0]}/>
    else if(filteredData.length >= 10)
     return <p>Too many matches, specify another filter</p>
    else if(filteredData.length > 1)
      return filteredData.map(country => <p key={country.cca2}> {country.name.common}<Button handler={() => setFilterString(country.name.common)}/></p>)
  }

  return (
    <div>
      <p>find countries: <input value={filterString} onChange={handleFilterCountryChange}/> </p>
      {filterDataCountry(filterString.length > 0 ? countries.filter(country => country.name.common.toLowerCase().includes(filterString.toLowerCase())) : [])}
    </div>
  );
}

export default App;
