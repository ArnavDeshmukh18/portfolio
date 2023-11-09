import React,{useState} from 'react'
import { folder, github, redirect } from '../assets/index'

import { addDoc,getDocs, collection,arrayUnion, doc, updateDoc } from "firebase/firestore";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { db } from '../firebase/Firebase';

const Projects = () => {

 const [loading, setLoading] = useState(false);
 const [projects,setProjects]=useState([]);
 const [techstack,setTechStack]=useState([]);
    const projectCollectionRef = collection(db, "projects");
    const getProductList = async () => {
      try {
          const data = await getDocs(projectCollectionRef);
          setLoading(true);

          const filteredData = data.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
          }));
       

          setProjects(filteredData);
          setLoading(false);
          console.log(filteredData)
          setTechStack(filteredData.techstack)
          console.log(techstack)
      } catch (err) {
          console.error(err);
      }
  };
   
  React.useEffect(() => {
    getProductList();
    AOS.init();
  }, [])
  return (
    <section id="projects" className='bg-primary items-center my-12'>

      <div className='text-white'>
        <h1 className='font-poppins font-bold text-[42px] text-center md:text-left py-9 my-9'>Projects</h1>
      </div>


      <div className=' flex  flex-wrap items-center h-[100%]'>
        {
          projects.map((project) => (

            <div className='bg-cardBackground w-[80%] sm:w-[55%] md:w-[25%]  flex flex-col gap-3 p-10 m-10  rounded-3xl text-cardText hover:scale-110 hover:text-gradient ' data-aos="fade-up" >
              <div className='flex flex-row justify-between'>
                <a href={project.url}>  <img src={folder} alt="" className='w-[2rem] h-[2rem] ' /></a>
                <a href={project.url}>   <img src={github} alt="" className='w-[2rem] h-[2rem] hover:scale-110 ' /></a>
              
             
              </div>
              <div className='text-white text-start flex flex-col gap-5'>
                <h1 className='font-bold text-[1.4rem] '>{project.title}</h1>
                <p className='text-bold'>{project.discription}</p>
                <div className='flex flex-row gap-4 '>
              
<span>{project.techstack}</span>
                   
                  
                  
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