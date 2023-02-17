import React from 'react'
import {Navbar,About,Experience,Footer,Contact,Home,Projects, Skills} from './components'
const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      

      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
         <Navbar/>
        </div>
      </div>

      <div className='bg-primary sm:px-16 px-6 py-16 flex justify-center items-center'>
        <div className="xl:max-w-[1280px] w-full">
        <Home/>
        </div>
      </div>

      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <About/>
          <Skills/>
          <Experience/>
          <Projects/>
          <Contact/>
          <Footer/>
        </div>
      </div>

      



    </div>
  )
}

export default App