import { Grid, Typography } from '@mui/material'
import React from 'react'
import image from '../myProfile.png'
function Hero() {
return (
<Grid container marginTop={'5rem'} style={{overflow:'hidden'}}  >
    <Grid item lg={6} style={{ padding: '1rem'}} className='animate__animated animate__jackInTheBox  '>
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <div>
                <Typography variant='h3' style={{ fontFamily: 'sans-serif , cursive', marginBottom: '1rem' }} className='text-gray-300  leading-3' >
                    Welcome To <br />
                    My Personal Portfolio
                </Typography>
                <Typography variant='h6' className='text-gray-400 leading-3'>
                    I am AsadUllah Frontend Developer, looking for the internship to pracitce my skills.Having knowledge of React.js, React-hooks, Redux, React-Routing, Material-UI, Tailwind CSS, framer-motion (animation library).
                </Typography>

                <div style={{width:'100%',marginTop:'1rem'}}>
                    <button style={{width:'30%'}} className='text-gray-400 hover:text-gray-300  bg-gray-700 py-2 px-4 rounded-full'>Hire me</button>
                </div>
                <div style={{width:'12%',height:'5px',marginTop:'3rem'}} className='rounded-full bg-gray-500'>
                        
                </div>
            </div>
        </div>
    </Grid>

    <Grid item lg={6} className='animate__animated animate__zoomIn animate__delay-1s'>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <img src={image} alt="" srcset="" style={{ width: '80%', height: '80%' }} />
        </div>
    </Grid>
</Grid>
)
}

export default Hero
