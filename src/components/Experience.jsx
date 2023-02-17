import React from "react";
import { experienceDetail } from "../constants";
const Experience = () => {
  return (
    <section className="bg-primary ">
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
          >
            <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-start">
              <h5 className="mb-2 text-2xl font-bold text-gradient tracking-tight text-gray-900 dark:text-gradient">
                {details.title}
              </h5>

              <p className="font-normal text-gray-700 dark:text-gray-400 py-4">
                {details.duration}
              </p>
            </div>
            <div>
              <p className="text-white text-center md:text-start  text-[18px]">
                {details.description}
              </p>
             
            </div>

          
          
          </div>
        ))}

        <div></div>
      </div>
    </section>
  );
};

export default Experience;
