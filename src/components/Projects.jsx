import React from 'react'
import { folder, github, redirect } from '../assets/index'
import { projects } from '../constants'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {

  React.useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id="projects" className='bg-primary items-center my-12'>

      <div className='text-white'>
        <h1 className='font-poppins font-bold text-[42px] text-center md:text-left py-9 my-9'>Projects</h1>
      </div>


      <div className=' flex  flex-wrap items-center'>
        {
          projects.map((project) => (

            <div className='bg-cardBackground w-[80%] sm:w-[55%] md:w-[25%]  flex flex-col gap-3 p-10 m-10  rounded-3xl text-cardText hover:scale-110 hover:text-gradient ' data-aos="fade-up" >
              <div className='flex flex-row justify-between'>
                <a href={project.url}>  <img src={folder} alt="" className='w-[2rem] h-[2rem] ' /></a>
                <a href={project.url}>   <img src={github} alt="" className='w-[2rem] h-[2rem] hover:scale-110 ' /></a>
              
             
              </div>
              <div className='text-white text-start flex flex-col gap-5'>
                <h1 className='font-bold text-[1.4rem] '>{project.title}</h1>
                <p className=''>{project.discription}</p>
                <div className='flex flex-row gap-4 '>
                  <span>{project.usedTech1}</span>
                  <span>{project.usedTech2}</span>
                  
                </div>

              </div>



            </div>


          ))

        }

      </div>










    </section>
  )
}

export default Projects