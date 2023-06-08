import React from 'react'
import html from '../img/html.png'
import css from '../img/css.png'
import js from '../img/js.png'
import react from '../img/React.png'
import talwind from '../img/Tailwind_CSS.png'
const Skills = () => {
  return (
    <div>
      <p className='text-indigo-600 font-bold dark:text-gray-100  flex justify-center text-2xl'>Skills</p>
       <div className='flex  justify-center items-center gap-5 mt-5'>
       <span className='text-gray-400  flex-col justify-center text-center font-semibold'><img src={html} alt='logo' className='w-20 dark:shadow-md dark:shadow-gray-500 mb-2'/> <p>HTML</p></span>
        
        <span className='text-gray-400 flex  flex-col justify-center text-center font-semibold '><img src={css} alt='logo' className='w-16 dark:shadow-md dark:shadow-gray-500 mb-2'/><p>CSS</p></span>
       
        <span className='text-gray-400 flex  flex-col justify-center text-center font-semibold'><img src={js} alt='logo' className='w-16 dark:shadow-md dark:shadow-gray-500 mb-2'/><p>JS</p></span>
        
        <span className='text-gray-400 flex  flex-col justify-center text-center font-semibold'><img src={react} alt='logo' className='w-20 dark:shadow-md dark:shadow-gray-500 mb-2'/><p>React</p></span>
       
        <span className='text-gray-400 flex  flex-col justify-center text-center font-semibold '><img src={talwind} alt='logo' className='w-20 dark:shadow-md dark:shadow-gray-500'/><p>Tailwind Css</p></span>
       </div>
    </div>
  )
}

export default Skills
