import React, {useContext} from 'react'
import {GiNightSky} from "react-icons/gi"
import { ThemeContext } from '../ThemeContext';
import { FaRegLightbulb } from 'react-icons/fa';

const ThemeButton = () => {
const {darkMode, setDarkMode} = useContext(ThemeContext)

 
        const changeTheme = ()=>{
            setDarkMode(!darkMode)
        }

       return <button onClick={changeTheme}>{!darkMode? <GiNightSky />: <FaRegLightbulb />}</button>
    
    
  
}

export default ThemeButton