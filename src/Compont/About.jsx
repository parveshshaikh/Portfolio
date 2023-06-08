import React from 'react'
import p from '../img/p1.png'

const About = () => {
  return (
    <div className='container m-auto px-5 py-10 flex flex-col items-center gap-10 lg:flex-row pt-10'>
      <img src={p} alt='imu' className=' w-[200px]  h-[300px] rounded-full object-cover'/> 
      <div className='flex flex-col gap-3'>
        <p className='text-indigo-600 font-bold flex justify-center text-2xl '>ABOUT ME</p>
        <p className='text-3xl font-medium dark:text-white'>Better Design</p>
        <p className='text-3xl font-medium dark:text-white'>Better Experiance</p>
        <p className='text-gray-400'> I have recently completed my post graduate with a passion for web development and a solid foundation in coding and programming, I am eager to contribute my skills and learn from experienced professionals in a dynamic work environment.

Throughout my academic journey, I have gained a strong understanding of web development principles, HTML, CSS, JavaScript, and responsive design. I have hands-on experience with building static websites and have completed several projects that demonstrate my ability to create visually appealing and functional web pages.

I am familiar with modern web development frameworks such as React and I have a basic understanding of database management using SQL. While I may not have extensive professional experience, I am confident in my ability to quickly learn new technologies and adapt to different project requirements.

During my time in my college, I actively participated in team projects, collaborating with fellow students to design and develop websites from scratch. These experiences honed my communication and teamwork skills, as well as my ability to meet project deadlines.

I am highly motivated and dedicated to continuous learning in the field of web development. I am actively pursuing additional certifications and online courses to further expand my knowledge and stay up to date with the latest industry trends and technologies.

I am excited about the opportunity to contribute my skills and enthusiasm and be a part of a team that is passionate about creating exceptional websites. I am confident that my strong work ethic, willingness to learn, and attention to detail will make me a valuable asset to your organization. </p>
        
       
       
      </div>
      
     
    </div>
  )
}

export default About
