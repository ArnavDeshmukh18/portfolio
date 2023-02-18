import React from 'react'
import Typewriter from "typewriter-effect";
import {profile} from '../assets/index'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
  
   // useEffect(() => {
   //    AOS.init();
   //  }, [])

 return(
    <section id='home' className='flex flex-col md:flex-row items-center justify-between my-11 '>

      <div className='text-white text-center md:text-left'>
         <div>
            <h1   className='font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px ]' >
               <span className='text-gradient'>
                  Arnav
               </span>
               <br />
               <span className='text-gradient'>
                  Deshmukh
               </span>
            </h1>
         </div>
         <div className='font-poppins font-bold  text-[25px] px-1 py-5'>
            <Typewriter 
            options={{
               autoStart:true,
               loop:true,
               delay:40,
               strings:[
                  "I'm Developer",
                  "I'm Designer",
                  "I'm Tech Enthusiastic"
            
               ],
            }}
            
            />

         </div>
         <div>
            <button type='button' data-mdb-ripple="true" data-mdb-ripple-color="light" className='font-poppins bg-dimBlue p-2 my-4 text-buttonText rounded-md hover:bg-secondary focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' >
               Download CV
            </button>
         </div>

 
      </div>

      <div className='flex-1 flex  justify-center items-start mx-7 md:my-0 my-10 relative'>
          <img src={profile} alt="profile" className=' sm:w-[55%] h-[100%] relative z-[5]' />  
             <div className="absolute z-[0] w-[20%] h-[30%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[100%] h-[100%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[100%] h-[100%] right-20 bottom-20 blue__gradient" />
    
      </div>

    </section>
 )
}

export default Home





{/* <section id='home' className='flex flex-col md:flex-row justify-between items-center md:items-start '>

<div className='flex flex-col justify-center items-center md:items-start'>
   <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px ]'>
      <span className='text-gradient'>
         Arnav

      </span>
      <br className='sm:block hidden'/>{" "}
      <span className='text-gradient'>
         Deshmukh
      </span>

   </h1>


   <div className="flex flex-row  justify-between  items-center w-full">

<h1  className=" flex-1 font-poppins  ss:font-semibold   ss:text-[42px] text-[22px] text-white ss:leading-[100px] leading-[75px ] " >
<span></span>
<span className='text-white '>
Developer
</span>


</h1>




</div>



</div>


<img src={profile} alt="profile" className='w-[45%] h-[100%] relative z-[5]' />            
         


  
</section> */}