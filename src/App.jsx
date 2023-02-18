import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Navbar,About,Experience,Footer,Contact,Home,Projects, Skills} from './components'
const App = () => {
  React.useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <div className='bg-primary w-full overflow-hidden '>
      

      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
         <Navbar/>
        </div>
      </div>

      <div className='bg-primary sm:px-16 px-6  flex justify-center items-center' >
        <div className="xl:max-w-[1280px] w-full">
        <Home/>
        </div>
      </div>

      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full ">
          <About/>
          <Skills/>
          <Experience/>
          <Projects/>
          
          {/* <Footer/> */}
        </div>
      </div>
      <Contact/>
  
      
    </div>
  )
}

export default App