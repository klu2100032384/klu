import React from 'react'
import './Developer.css'
import Terminal from '../../assets/discount.png'

const Developer = () => {
    return (
        <div className='developers'>
            <div className="container">
                <div className="left">
                    <h2>Discount for Initial Infix users.</h2>
                    <p>Checkout the <span className="blue">documentation </span>, for further details . We are looking forward to serve you as our customer.</p>
                </div>
                <div className="right">
                    <div className="img-container">
                        <img src={Terminal} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Developer
