import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping ,faSun ,faMoon } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

import { useEffect, useState } from 'react'
export default function Header() {
    const [them , setThem] = useState(localStorage.getItem("currentMode") ?? "dark")
    useEffect(() => {
        if (them === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        }else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    },[them])    
    
    return (
    <header>
        <div className="logo">
        <a href="#"><img src="./logo.png" alt="" /></a>Shopes
        </div>
        <div className="form">
            <input type="text" placeholder='Serch' />
            <button className='order'>
            <span>Order</span>
            <FontAwesomeIcon icon={faCartShopping} />
            </button>
            <button
            onClick={() => {
                localStorage.setItem("currentMode",them === "dark"? "light" : "dark")
                setThem(localStorage.getItem("currentMode"))
        
            }}
            className='bar'>
            {them === 'dark' ? (<FontAwesomeIcon icon={faSun} />) : (<FontAwesomeIcon icon={faMoon} />) }  
            </button>
        </div>
        
    </header>
    )
}
