import "./components.css"
import { useState,useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faSun} from "@fortawesome/free-regular-svg-icons"
import { faMoon } from "@fortawesome/free-regular-svg-icons"


const Header = () => {

  const defaultTheme = window.matchMedia("prefers-color-scheme: light").matches

  const [theme,setTheme] = useState(defaultTheme ? "light" : "dark")

 const handleThemeChange = () => {
   setTheme(prevTheme => prevTheme === "light" ? "dark" : "light" )
 }

 useEffect(()=>{

  const root = document.documentElement.setAttribute("color-scheme",`${theme}`)

 },[theme])

  return  (
      <div className="header">
            <div>
                <h1>Social Media Dashboard</h1>
                <p>Total followes: 23,004</p>
            </div>

            <button
             className="theme-switcher-btn"
             onClick={handleThemeChange}
             >
              <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon } />
            </button>
      </div>
  )
}

export default Header
