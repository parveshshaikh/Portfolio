import React from 'react'
import { herosData } from '../Utils/Data'
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className='container  mx-auto dark:bg-gray-900 pt-16'>
          <div className='flex flex-col items-center '>
          <h1 className='text-indigo-600 font-bold dark:text-gray-100  text-2xl'>PROJECTS</h1>
          <p className='w-1/2 text-center dark:text-white py-5'>My approach to website design is to create a website that strengthens your company's brand while ensuring ease of use and simplicity for your audience</p>
        <div className='container m-auto px-10 py-10 flex flex-wrap justify-center items-center gap-10'>
        {
            herosData.map((items,index)=>{
              return(
                <div className='flex flex-wrap items-center'key={index} >
                <div className='flex flex-col gap-4  dark:text-white items-center w-60 md:w-72'>
                  <p className='font-semibold md:text-xl'>{items.title}</p>
                  <p className='text-center text-gray-600  text-base md:text-lg'>{items.desc}</p>
             <div className='flex gap-5 pb-5'>  <Link to={items.git_link} >Code <GitHubIcon/></Link> 
               <Link  to={items.link} className='text-indigo-600 cursor-pointer'>Live Demo <LaunchIcon/></Link></div>
              </div>
              <img src={items.image} alt='imu' className='w-72 shadow-xl rounded-md justify-center py-5'/>
              </div>
              )
            })
          } 
          </div>     
         </div>
       
      </div>
         
 
  )
}

export default Projects
