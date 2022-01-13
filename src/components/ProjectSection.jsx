import { Container,Typography } from '@mui/material'
import React from 'react'
import {data} from './data'
import image from './landingpage.PNG'

function ProjectSection() {
return (
<div>
    <Typography variant='h3' style={{ fontFamily: 'sans-serif , cursive' }} className='text-gray-300' >
        Projects
    </Typography>
    <Container >
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>

            <div style={{ width: '80%' }} >
                
                    <div className="grid grid-cols-2 gap-10" >
                    { data.map(value => 
                    <div style={{ boxShadow: 'rgba(255, 255, 255, 0.35) 0px 5px 15px' }}>
                        <img src={image} alt="langing-page" srcset="" />
                        <Typography variant='h5' className='text-gray-400 text-center mt-4'>
                            {value.title}
                        </Typography>
                        <div className='text-center flex justify-center mt-4'>
                            <div className='bg-yellow-300 w-16 h-1 rounded-full'>

                            </div>
                        </div>
                        <div className='p-4'>
                            <Typography className='text-gray-400'>
                                {value.description}
                            </Typography>

                            <div className='flex justify-between mt-4'>
                                {
                                    value.tags.map(value => 
                                        <Typography className='text-orange-100'>
                                                {value}
                                        </Typography>
                                     )
                                
                                }
                            </div>

                            <div className='flex justify-around mt-4'>
                                {
                                    value.buttons.map(value=> 
                                        <button className='hover:text-gray-600  text-2xl py-1 px-4 rounded-full bg-gray-400'>{value}</button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
                
            }
            </div>
            </div>
        </div>
    </Container>
</div>
)
}

export default ProjectSection
