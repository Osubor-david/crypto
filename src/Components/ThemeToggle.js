import React ,{useContext}from 'react'
import {HiSun,HiMoon} from 'react-icons/hi'
import {ThemeContext} from '../context/ThemeContext'


 function ThemeToggle() {
    
const {theme, setTheme} = useContext(ThemeContext)
    return (
        <div className='md:p-2'>
            {theme === 'dark' ? (
                <div  className='flex items-center cursor-pointer' onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}>
                    <HiSun size={20}  className=' text-primary md:text-2xl  mr-2'/>Light Mode
                </div>
            ) : (
                <div className='flex items-center cursor-pointer' onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}>
                    <HiMoon size={20} className='text-primary text-2xl mb-1 md:mb-0 mr-2' /> Dark Mode
                </div>
            )}
            
        </div>
    )
}

export default ThemeToggle