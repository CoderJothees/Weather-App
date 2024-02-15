import React from 'react'

//Importing for Day time icons
import { GoSun } from "react-icons/go"; //01d
import { CiCloudSun } from "react-icons/ci"; //02d
import { FaCloudSunRain } from "react-icons/fa6"; //10d

//Importing for Night time icons
import { FaRegMoon } from "react-icons/fa"; //01n
import { BsFillCloudMoonFill } from "react-icons/bs"; //02n
import { IoIosCloudOutline } from "react-icons/io"; // 03n and 03d
import { BsClouds } from "react-icons/bs"; //04n and 04d
import { FaCloudRain } from "react-icons/fa6"; //09n and 09d
import { FaCloudMoonRain } from "react-icons/fa"; //10n
import { IoThunderstormOutline } from "react-icons/io5"; //11n
import { FaRegSnowflake } from "react-icons/fa"; //13n and 13d
import { RiMistLine } from "react-icons/ri"; //14n ans 14d

function Icons({ IconId }) {
    switch (IconId) {

        //Day time icons

        case "01d":
            return (<GoSun />)
            break;
        case "02d":
            return (<CiCloudSun />)
            break;
        case "03d":
            return (<IoIosCloudOutline />)
            break;
        case "04d":
            return (<BsClouds />)
            break;
        case "09d":
            return (<FaCloudRain />)
            break;
        case "10d":
            return (<FaCloudSunRain />)
            break;
        case "11d":
            return (<IoThunderstormOutline />)
            break;
        case "13d":
            return (<FaRegSnowflake />)
            break;
        case "50d":
            return (<RiMistLine />)
            break;



        //Night time icons 
        case "01n":
            return (<FaRegMoon />)
            break;
        case "02n":
            return (<BsFillCloudMoonFill />)
            break;
        case "03n":
            return (<IoIosCloudOutline />)
            break;
        case "04n":
            return (<BsClouds />)
            break;
        case "09n":
            return (<FaCloudRain />)
            break;
        case "10n":
            return (<FaCloudMoonRain />)
            break;
        case "11n":
            return (<IoThunderstormOutline />)
            break;
        case "13n":
            return (<FaRegSnowflake />)
            break;
        case "50n":
            return (<RiMistLine />)
            break;

        default:
            return (<IoIosCloudOutline />)
            break;
    }
}

export default Icons