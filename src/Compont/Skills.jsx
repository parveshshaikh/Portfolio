import React from 'react'
import html from '../img/html.png'
import {skill} from '../Utils/skills'
const Skills = () => {
  return (
    <div>
      <p className='text-indigo-600 font-bold dark:text-gray-100  flex justify-center text-2xl'>Skills</p>
       <div className='flex justify-between md:justify-center items-center text-center gap-5 md:gap-10 mt-5 px-5'>
       {
        skill.map((item,index)=>{
          return(
            <span className='text-gray-400 flex flex-col justify-center items-center font-semibold'><img src={item.image} alt='logo' className='w-10 md:w-16 dark:shadow-md dark:shadow-gray-500 mb-2'/> <p className='text-sm md:text-base'>{item.name}</p></span>
          )
        })
       }
        
       
       </div>
    </div>
  )
}

export default Skills
