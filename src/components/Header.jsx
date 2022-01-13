import React from 'react'
function Header() {
    let color = 'text-gray-400 ml-6 font-bold font-sas hover:cursor-pointer hover:text-gray-500';
    return (
        
        <div  style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <p className={`${color} ml-0 text-2xl `}>Portfolio</p>
            <div style={{display:'flex'}}>
                <p className={color}>Projects</p>
                <p className={color}>Technologies</p>
                <p className={color}>About</p>
            </div>
            <div className='hidden md:flex'>
                <p className={color}>GitHub</p>
                <p className={color}>Linkedin</p>
                <p className={color}>Insta</p>
            </div>
        </div>
    )
}

export default Header
