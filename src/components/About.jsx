import React from 'react'
import {about} from '../constants'
import AboutAnimation from './AboutAnimation';
import {BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'
const About = () => {

   console.log(about);
  return (
   <section  id="about"  className='bg-primary flex flex-col md:my-11  '>
    <div className='text-white'>
     <h1 className='font-poppins font-bold text-[42px] text-center md:text-left'>About</h1>
    </div>
    <div className='text-aboutText flex flex-col md:flex-row  items-center  text-[18px] my-10 text-center md:text-left space-x-10 pr-7 '>
    <div className='w-[100%] sm:w-[55%] md:w-[125%] pl-9'>
        <AboutAnimation/>
       </div>
       <div className=''>
          <h1 className='text-bold text-[18px] md:text-[20px]'>
            I'm an undergrad engineering student, Currently pursuing <span className='text-bold text-buttonText'>B.Tech in Information Technology</span>. I am a frontend developer with a particular interest in making Website and Android Apps using <span className='text-bold text-buttonText'>React </span>and <span className='text-bold text-buttonText'>Flutter</span>. I also enjoy competetive programming. I try to keep up with the latest tools and am always looking for new things. Like to collaborate as well as work  with new people
          </h1>
          <ul className='flex flex-row justify-center  space-x-7 my-10'>
            <a href="https://www.linkedin.com/in/arnav-deshmukh-510004218/"><li ><BsLinkedin size={32}/></li></a>
           <a href="https://www.instagram.com/_arnav_d_/"><li><BsInstagram size={32}/></li></a> 
          <a href="https://github.com/ArnavDeshmukh18"><li><BsGithub size={32}/></li></a>  
          </ul>
       </div>
      
       
    </div>

   </section>
  )
}

export default About