import React, { useEffect, useState } from 'react'
import '../Styles/HomeStyling.scss'
import { BsSearch } from "react-icons/bs";
import { BsFillCloudSunFill } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { WiCloudyWindy } from "react-icons/wi";
import axios from 'axios';
import Icons from './Icons';
import PopUpNotification from './PopUpNotification';

function HomePage() {

    //Weather Data
    const [weatherData, setWeatherData] = useState({
        temp: 10,
        City_Name: 'Salem',
        Humidity: 20,
        Wind_Speed: 4,
        Cloud_description: 'cloudy',
        icon: '03d',
    });

    //To Search City
    const [cityName, setCityName] = useState("Salem");

    //To Handle Errors 
    const [err, setErr] = useState({
        isError: false,
        ErrMsg: "No message",
    })

    //Api Url
    const ApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=7c58784f5ea9053ddda2133353dee112&units=metric';

    //Fetching from Weather Api 
    useEffect(() => {
        axios.get(ApiUrl)
            .then(res => {
                setWeatherData({
                    temp: res.data.main.temp,
                    City_Name: res.data.name,
                    Humidity: res.data.main.humidity,
                    Wind_Speed: res.data.wind.speed,
                    Cloud_description: res.data.weather[0].description,
                    icon: res.data.weather[0].icon,
                });
                setErr({
                    isError: false
                });
            })
            .catch(err => {
                console.log(err.response.data.message);
                setErr({
                    isError: true,
                    ErrMsg: err.response.data.message,
                });
            })
    }, []);

    function WeatherApiCall(ev) {
        ev.preventDefault();

        axios.get(ApiUrl)
            .then(res => {
                setWeatherData({
                    temp: res.data.main.temp,
                    City_Name: res.data.name,
                    Humidity: res.data.main.humidity,
                    Wind_Speed: res.data.wind.speed,
                    Cloud_description: res.data.weather[0].description,
                    icon: res.data.weather[0].icon,
                })
            })
            .catch(err => {
                setErr({
                    isError: true,
                    ErrMsg: err.response.data.message,
                });
            })

    }

    return (
        <div className='container'>

            <div className='ErrMsg'>
                {
                    (err.isError) ? (
                        <PopUpNotification ErrMsg={err.ErrMsg} setErrNotification={setErr} />
                    ) : ""
                }
            </div>

            <div className="weather">
                <div className="search">

                    <input type="text" placeholder='Enter city name' onChange={ev => setCityName(ev.target.value)} />
                    <button className='searchBTN' onClick={WeatherApiCall}><BsSearch /></button>

                </div>
                <div className="weatherInfo">
                    <span className='cloudIcon'><Icons IconId={weatherData.icon} /></span>
                    <h3>{weatherData.Cloud_description}</h3>
                    <h1>{Math.round(weatherData.temp)}°c</h1>
                    <h2>{weatherData.City_Name}</h2>
                    <div className="details">
                        <div className="col">
                            <span className='cloudIcon'><WiHumidity /></span>

                            <div className='humidity'>
                                <p>{Math.round(weatherData.Humidity)}%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div className="col">
                            <span className='cloudIcon'><WiCloudyWindy /></span>
                            <div className='wind'>
                                <p>{Math.round(weatherData.Wind_Speed)} km/h</p>
                                <p>Wind</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default HomePage