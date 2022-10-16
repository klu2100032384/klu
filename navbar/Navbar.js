import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    
    return (
        <div className='navbar'>
            <div className="container">
                <h1 style={{ marginLeft: '1rem', color: '#00d8ff'}} >Infix emS</h1>
                <ul>
                    <li className="nav-item">
                        <Link to="/hero">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/developer">Discount</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/subscribe">Selection</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/SignUp">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Logout</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to="/Menu">Menu</Link>
                    </li> */}
                </ul>
                
            </div>
        </div>
    )
}

export default Navbar
