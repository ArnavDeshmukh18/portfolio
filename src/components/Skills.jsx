import React from 'react'
import { html,bootstrap,flutter,firebase,js,figma,css3,c,react} from "../assets/index";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Skills = () => {
 
    React.useEffect(() => {
      AOS.init();
    }, [])
  return(
    <section className='bg-primary my-12'>
         <div className='text-white'>
     <h1 className='font-poppins font-bold text-[42px] text-center md:text-left py-9'>Skills</h1>
    </div>
    <div className=''>

        
    <div className='grid grid-cols-4 md:grid-cols-6 gap-5  '>

<img src={html} alt="html" className='h-[100px] md:h-[150px]  my-5 hover:scale-125 transform' data-aos="fade-up" />
<img src={css3} alt="css" className='h-[100px] md:h-[150px]   my-5 hover:scale-125 transform' data-aos="fade-up"/>
<img src={js} alt="js" className='h-[100px] md:h-[150px]   my-5 hover:scale-125 transform' data-aos="fade-up"/>
<img src={bootstrap} alt="bootstrap" className='h-[100px] md:h-[150px]   my-5 hover:scale-125 transform' data-aos="fade-up"/>
<img src={flutter} alt="flutter" className='h-[100px] md:h-[150px]   my-5 hover:scale-125 transform' data-aos="fade-up"/>
<img src={firebase} alt="firebase" className='h-[100px] md:h-[150px]   my-5 hover:scale-125 transform' data-aos="fade-up"/>
<img src={figma} alt="figma" className='h-[100px] md:h-[150px]   my-5 hover:scale-125 transform' data-aos="fade-up"/>
<img src={c} alt="c" className='h-[100px] md:h-[150px]   my-5 hover:scale-125 transform' data-aos="fade-up"/>
<img src={react} alt="c" className='h-[100px] md:h-[150px]   my-5 hover:scale-125 transform' data-aos="fade-up"/>
</div>

    </div>
  

 
   

    </section>
  )
}

export default Skills