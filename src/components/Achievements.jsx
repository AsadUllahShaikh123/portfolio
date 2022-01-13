import { Typography } from '@mui/material'
import React from 'react'

let achievements =[
    {
        count:'36+',
        description:'open source projects'
    },
    {
        count:'40+',
        description:'open source repositries'
    },
    {
        count:'100+',
        description:'Github Followers'
    },
    {
        count:'250+',
        description:'Github Starts'
    }
]

function Achievements() {
    return (
        <div className='mt-10'>
            <div style={{width:'7%',height:'5px',marginTop:'3rem',marginBottom:'2rem'}} className='rounded-full bg-gray-500'>
                        
            </div>
            <Typography variant='h3' className='text-gray-300'>
               Personal Achievements
            </Typography>
            <div className='grid grid-cols-4 gap-4 mt-8'>
                {
                    achievements.map(value =>
                <div className='bg-gray-700  p-4 ' style={{ width:'100%',borderRadius:'0.5rem'}}>
                    <Typography className='text-gray-100 ' style={{fontSize:'2rem',fontWeight:'bold'}}>
                        {value.count}
                    </Typography>
                    <Typography className='text-gray-400 '>
                        {value.description} 
                    </Typography>
                </div>
                        )
                }
                
            </div>
            <div style={{width:'7%',height:'5px',marginTop:'3rem',marginBottom:'2rem'}} className='rounded-full bg-gray-500'>
                        
            </div>
            <div style={{width:'100%',height:'1px',marginTop:'1rem',marginBottom:'2rem'}} className='rounded-full bg-gray-800'>
                        
            </div>
        </div>
    )
}

export default Achievements
