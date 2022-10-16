import React from 'react'
import './Subscribe.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className="content">
                <h1>Select the necessary entertainment platforms or programs to add to your website.</h1>
                {/* <form action="" method="">

                    <div className="form-container">

                        <p style={{ fontFamily: 'Bahnschrift', color: 'white', fontSize: '20px' }}><input type="checkbox" />OTT movies and tv shows</p>
                        <p style={{ fontFamily: 'Bahnschrift', color: 'white', fontSize: '20px' }}><input type="checkbox" />Music concerts like Opera, Band, DJ</p>
                        <p style={{ fontFamily: 'Bahnschrift', color: 'white', fontSize: '20px' }}><input type="checkbox" />Food Competitions</p>
                        <p style={{ fontFamily: 'Bahnschrift', color: 'white', fontSize: '20px' }}><input type="checkbox" />Magic Shows</p>
                        <p style={{ fontFamily: 'Bahnschrift', color: 'white', fontSize: '20px' }}><input type="checkbox" />Anime Shows & Manga</p>
                        <p style={{ fontFamily: 'Bahnschrift', color: 'white', fontSize: '20px' }}><input type="checkbox" />Standup Comedy</p>
                        <Button
                            href='/Blend'
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Next
                        </Button>
                    </div>
                </form> */}
                <FormGroup>
      <FormControlLabel style={{fontFamily: 'Bahnschrift', color: 'white', fontSize: '20px'}} control={<Checkbox  style={{color:'white'}}/>} label="OTT movies and tv shows" />
      <FormControlLabel style={{fontFamily: 'Bahnschrift', color: 'white', fontSize: '20px'}} control={<Checkbox  style={{color:'white'}}/>} label="Music concerts like Opera, Band, DJ" />
      <FormControlLabel style={{fontFamily: 'Bahnschrift', color: 'white', fontSize: '20px'}} control={<Checkbox  style={{color:'white'}}/>} label="Food Competitions" />
      <FormControlLabel style={{fontFamily: 'Bahnschrift', color: 'white', fontSize: '20px'}} control={<Checkbox  style={{color:'white'}}/>} label="Magic Shows" />
      <FormControlLabel style={{fontFamily: 'Bahnschrift', color: 'white', fontSize: '20px'}} control={<Checkbox  style={{color:'white'}}/>} label="Anime Shows & Manga" />
      <FormControlLabel style={{fontFamily: 'Bahnschrift', color: 'white', fontSize: '20px'}} control={<Checkbox  style={{color:'white'}}/>} label="Standup Comedy" />
      <TextField id="filled-basic" label="Other" variant="filled" />
      <Button
                            href='/Blend'
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Next
                        </Button>
    </FormGroup>
            </div>
        </div>
    )
}

export default Subscribe
