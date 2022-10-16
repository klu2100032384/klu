import React from 'react'
import MainVideo from '../../assets/MainVid.mp4'
import './Hero.css'
import Button from '@mui/material/Button';
const hero = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={MainVideo} type='video/mp4'/>
            </video>
            <div className="hero-text">
                <h1>Everything Digital</h1>
                <h1><span>Manage your </span> Entertainment events</h1>
                <p>Guaranteed satisfaction with our service.</p>
                <div className="btn-group">
                    <Button href ="/Subscribe"variant="contained">Use Infix emS</Button>
                    <button className="btn btn-outline">FAQ</button>
                </div>
            </div>
           
        </div>
    )
}

export default hero
