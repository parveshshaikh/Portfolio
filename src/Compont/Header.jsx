import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import avatar from '../img/logo.png'
const Header = () => {
const [show,setshow]=useState(true)
const [theme,settheme]=useState('light')

useEffect(()=>{
  if(theme ==='dark'){
    document.documentElement.classList.add('dark')
  }
  else{
    document.documentElement.classList.remove('dark')
  }
})
const change_theme=()=>{
  settheme(theme==='dark'?'light':'dark')
  console.log('theme',theme)
 
}
const toggle=()=>{
  setshow(!show)
  
}

  return (
<div className='w-full bg-gray-100 fixed z-10 dark:bg-slate-900'>
<div className='container mx-auto flex justify-between  items-center '>
 <div className='flex items-center gap-2'>
  <img src={avatar} alt='imu' className='w-10 h-10'/>
  <span className='font-semibold text-lg dark:text-gray-100'>Portfolio</span>
 </div>
  <div>
  <ul className='hidden md:flex space-x-10 font-bold text-sm uppercase dark:text-gray-100'>
  <li className=''>
    <Link to='/' className='hover:text-gray-500 hover:before:absolute before:bg-indigo-700 before:w-20 before:h-0.5 before:top-8 before:rounded-2xl'>Homepage</Link>
   </li>
   <li>
    <Link to='/about' className='hover:text-gray-500 hover:before:absolute before:bg-indigo-700 before:w-12 before:h-0.5 before:top-8 before:rounded-2xl'>About</Link>
   </li>
  
   <li>
    <Link to='/project' className='hover:text-gray-500 hover:before:absolute before:bg-indigo-700 before:w-14 before:h-0.5 before:top-8 before:rounded-2xl'>Project</Link>
   </li>
  </ul>
  </div>
  <div>
  <div className='absolute bottom-1 right-5 flex items-center gap-2'>
  {
    theme==='dark'? <img src='https://cdn-icons-png.flaticon.com/512/169/169367.png' alt='imu' className='hidden md:flex w-5 h-5' onClick={change_theme}/>:<img src='https://static.vecteezy.com/system/resources/previews/013/453/247/non_2x/golden-ramadan-moon-free-png.png' alt='imu' className='hidden md:flex w-5 h-5' onClick={change_theme}/>
   }
    <div className=' md:hidden dark:text-gray-100 ' >
      {
        
          show? <MenuIcon onClick={toggle}/>:<CloseIcon onClick={toggle} />
        
      }
    </div>
  </div>
    <ul className={`flex-col absolute top-16 right-0 bg-gray-100 w-full text-center space-y-5 rounded-b-3xl ${show?'hidden':'block'}`} >
    <li >
    <Link to='/' className='hover:text-gray-500'onClick={()=>setshow(true)}>Homepage</Link>
   </li>
   <li>
    <Link to='/about' className='hover:text-gray-500'onClick={()=>setshow(true)}>About</Link>
   </li>
  
   <li>
    <Link to='/project' className='hover:text-gray-500'onClick={()=>setshow(true)}>Project</Link>
   </li> 
    </ul>
  </div>
 </div>
</div>


  )
}

export default Header
