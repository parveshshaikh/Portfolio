import React from 'react'
import av from '../img/p.png'
import About from './About';
import Services from './Projects';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import Skills from './Skills';
const Home = () => {
  return (
  <>
  <div className='h-80 bg-gradient-to-t from-indigo-200 lg:h-screen relative overflow-hidden dark:from-slate-800 dark:to-slate-900'>
<img src={av} alt='imu' className='absolute bottom-0 h-5/6 object-cover right-0 lg:left-0 mx-auto ' />
<div className=' lg:bg-blue-900 absolute right-0 left-0 mx-auto -bottom-1/4 h-[500px] w-[500px] rounded-full -z-10'></div>
<div className='absolute top-1/3 left-5 text-2xl sm:left-20  sm:text-4xl md:left-1/4 md:text-6xl lg:left-10  xl:left-40 xl:text-7xl font-bold'>
  <span className='text-gray-600'>FrontEnd</span>
  <p className='text-red-500'>Developer</p>
  <div className='flex gap-2 text-lg justify-center items-center'>
    <Link to='https://github.com/parveshshaikh'><GitHubIcon className='cursor-pointer dark:text-gray-100'/></Link>
    <Link to='https://www.linkedin.com/in/parvesh-shaikh-169013249 /'><LinkedInIcon className='cursor-pointer dark:text-gray-100'/></Link></div>
</div>
<div className='hidden lg:block absolute top-0 bottom-0 m-auto bg-white h-fit w-1/3 rounded-lg right-10 space-y-2 p-4 shadow-lg dark:bg-slate-900 dark:shadow-slate-800'>
  <span className='text-4xl font-semibold dark:text-gray-100'>Hi, I am Parvesh</span>
  <p className='text-gray-400 dark:text-white'>I am web Developer ,our aim to create awesome website and provide good interface and to make user friendly website</p>
  <button className='bg-indigo-600 px-3 py-1 text-white rounded-md font-semibold'>Hire Me</button>
  </div>
  </div>
  <About/>
  <Skills/>
  <Services/>
  </>

  ) 
}

export default Home
