import React,{useState} from "react";

import { addDoc,getDocs, collection,arrayUnion, doc, updateDoc } from "firebase/firestore";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { db } from "../firebase/Firebase";
const Experience = () => {
  const [loading, setLoading] = useState(false);
 const [experienceDetail,setexperienceDetail]=useState([]);
 
    const projectCollectionRef = collection(db, "experienceDetail");
    const getProductList = async () => {
      try {
          const data = await getDocs(projectCollectionRef);
          setLoading(true);

          const filteredData = data.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
          }));
       

          setexperienceDetail(filteredData);
          setLoading(false);
          console.log(filteredData)
         
      } catch (err) {
          console.error(err);
      }
  };
   
  React.useEffect(() => {
    getProductList();
    AOS.init();
  }, [])
  return (
    <section id="experience" className="bg-primary my-12">
      <div className="text-white">
        <h1 className="font-poppins font-bold text-[42px] text-center md:text-left py-9">
          Experience
        </h1>
      </div>
      <div>
        {experienceDetail.map((details) => (
          <div
            class="block md:w-[75%] p-6 bg-white border justify-center border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 md:text-center my-10"
            key={details.id}
            data-aos="fade-right"
          >
            <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-start">
              <h5 className="mb-2 text-2xl font-bold text-gradient tracking-tight text-gray-900 dark:text-gradient">
                {details.title}
              </h5>

              <p className="font-normal text-gray-700 dark:text-gray-400 py-4 font-poppins">
                {details.duration}
              </p>
            </div>
            <div>
             
              {
                details.description.map((dis)=>( <p className="text-white text-center md:text-start  text-[18px]">{dis} </p>))
              }
             
             
            </div>

          
          
          </div>
        ))}

        <div></div>
      </div>
    </section>
  );
};

export default Experience;
