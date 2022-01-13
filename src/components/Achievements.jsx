import { Typography } from '@mui/material'
import React from 'react'

function Achievements() {
    return (
        <div className='mt-10'>
            <Typography variant='h3' className='text-gray-300'>
               Personal Achievements
            </Typography>
            <div className='grid grid-cols-4 gap-4 mt-8'>
                <div className='bg-gray-700  p-4 ' style={{ width:'100%',borderRadius:'0.5rem'}}>
                    <Typography className='text-gray-100 ' style={{fontSize:'2rem',fontWeight:'bold'}}>
                        36+
                    </Typography>
                    <Typography className='text-gray-400 '>
                        Open Source Projects 
                    </Typography>
                </div>
                <div className='bg-gray-700  p-4 ' style={{ width:'100%',borderRadius:'0.5rem'}}>
                    <Typography className='text-gray-100 ' style={{fontSize:'2rem',fontWeight:'bold'}}>
                        40+
                    </Typography>
                    <Typography className='text-gray-400 '>
                        Open Source Repositries 
                    </Typography>
                </div>
                <div className='bg-gray-700  p-4 ' style={{ width:'100%',borderRadius:'0.5rem'}}>
                    <Typography className='text-gray-100 ' style={{fontSize:'2rem',fontWeight:'bold'}}>
                        100+
                    </Typography>
                    <Typography className='text-gray-400 '>
                       Github Followers 
                    </Typography>
                </div>
                <div className='bg-gray-700  p-4 ' style={{ width:'100%',borderRadius:'0.5rem'}}>
                    <Typography className='text-gray-100 ' style={{fontSize:'2rem',fontWeight:'bold'}}>
                        250+
                    </Typography>

                </div>
            </div>
        </div>
    )
}

export default Achievements
