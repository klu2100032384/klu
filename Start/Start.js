import React from 'react'
import Button from '@mui/material/Button';



const Start = () => {
    return (
        <div className="hero">
            <center>
      <div>
          <h3 style={{fontFamily:'Bahnschrift', color:'darkblue', fontSize:'60px'}}>Infix</h3>
          <h5 style={{fontFamily:'Bahnschrift', color:'darkblue', fontSize:'25px',fontStyle:'italic'}}>Entertain Yourself</h5>
          </div>
      <div className="button">
      <Button href="/Login"variant="contained" style={{position:'relative',bottom:'-250px',fontFamily:'Bahnschrift'}}>Get Started</Button>
        </div>
        </center>
    </div>
    )
}

export default Start