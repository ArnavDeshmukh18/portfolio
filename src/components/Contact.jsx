import React from 'react'
import { github } from '../assets'
import {BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'
import {CgMail} from 'react-icons/cg'
const Contact = () => {
  return (
   <section id="contact" className='bg-footer my-12 pb-16 '>



   
    <div className='text-center py-8 '>
      <h1 className='font-bold  text-[3rem] text-gray-300 '>Get In Touch</h1>
      <h2 className='text-gray-200 font-semibold mt-2'>Contact Me</h2>
    </div>

    <div className='flex flex-col sm:flex-row justify-center items-center gap-7 '>
      <a href="" className='flex flex-row items-center gap-2 hover:text-blue-600' >
      <BsGithub size={32}/>
      <h2 className='font-semibold text-[1.2rem]'>Github</h2>
      </a>
     

      <a href="" className='flex flex-row items-center gap-2 hover:text-blue-600' >
    <CgMail size={33}/>
      <h2 className='font-semibold text-[1.2rem]'>arnavd2840@gmail.com</h2>
      </a>
      <a href="" className='flex flex-row items-center gap-2 hover:text-blue-600' >
      <BsInstagram size={30}/>
      <h2 className='font-semibold text-[1.2rem]'>Instagram</h2>
      </a>
     

    </div>

{/*     
    <div className='text-white'>
        <h1 className='font-poppins font-bold text-[42px] text-center md:text-left py-9 my-9'>Contact</h1>
      </div>
      <div className='flex flex-col md:flex-row'>
        <div>

        </div>
        
      </div> */}
   </section>
  )
}

export default Contact