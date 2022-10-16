import React from 'react'
import './About.css'
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc'
import AboutCard from './AboutCard';

const About = () => {
    return (
        <div className='about'>
            <div className="container">
                <h2>A Reliable Management System</h2>
                <p>With Infix you can manage your entertainment events from anywhere with your digital devices.</p>
                <div className="card-container">
                    <div className="card">
                        <AboutCard icon={<SiHiveBlockchain className='icon' />} heading='Multiple instance management' text='By using Infix emS you can manage multiple events at a time without any hassle' />
                    </div>
                    <div className="card">
                        <AboutCard icon={<SiStrapi className='icon' />} heading='Fast Response' text='We are ready to answer any of your queries and also will help to make sure your enetertainment does not have any interruptions'/>
                    </div>
                    <div className="card">
                        <AboutCard icon={<SiFsecure className='icon' />} heading='Huge pool of categories' text='We support a huge pool of categories when it comes to event supportivity and we are also working on bringing new event categories into support' />
                    </div>
                    <div className="card">
                        <AboutCard icon={<VscServerProcess className='icon' />} heading='Data security' text='We use decentralized servers in order to sercure your precious data and we swear to always protect our user data' />
                    </div>
                </div>
                <a href="/" className="btn">Use Inifx emS</a>
            </div>
        </div>
    )
}

export default About
