import {Typography } from '@mui/material'
import React from 'react'

let technologies = [
    {
        title: 'Front-End',
        description: 'Experience with React.js'
    },
    {
        title: 'CSS',
        description: 'Experience with Tailwind'
    },
    {
        title: 'Library',
        description: 'Experience with Material-UI '
    }
]
function Technologies() {
    return (
    <div className='mt-16'>
        <div style={{width:'7%',height:'5px',marginTop:'3rem',marginBottom:'2rem'}} className='rounded-full bg-gray-500'>
                        
        </div>
        <div style={{width:'50%' , marginBottom:'1rem'}}>
        <Typography variant='h3' className='text-gray-300' style={{marginBottom:'1rem',marginTop:'1rem'}}>
            Technologies
        </Typography>
        <Typography className='text-gray-600'>
            I have worked with a range of technologies in the web Front-End World, Hand on Practice with React JS, Material UI, Tailwind CSS, Framer Motion
        </Typography>
        </div>

        <div className="grid grid-cols-3 gap-10" >
            {
                technologies.map(value =>
                    <div style={{ width: '40%' }}>
                        <Typography className='text-gray-100' style={{ lineHeight: '40px' }} variant='h5'>{value.title}</Typography>
                        <Typography className='text-gray-500 text-2xl'>{value.description}</Typography>
                    </div>
                )
            }
        </div>


    </div >
    )
}

export default Technologies
