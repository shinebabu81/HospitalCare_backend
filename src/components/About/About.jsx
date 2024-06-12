import React from 'react'
import aboutImg from "../../assets/images/about.png"
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from 'react-router-dom';

const About = () => {
  return <section>
<div className="container">
  <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>

    {/* ========== about IMAGE ========== */}
    <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
   
    <img src={aboutImg} alt="" />
    <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[7%] lg:right-[22%] '>
      <img src={aboutCardImg} alt="" />
    </div>
    </div>

    {/* ========== About Contents ============= */}
    <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
    <h2>
      World's No:1 , We are Proud
    </h2>
    <p className='text__para'>
    Patient care is the cornerstone of our hospital network's mission. From the moment a patient walks through our doors, they are met with compassion, expertise, and dedication to their well-being. Our team of doctors, comprising specialists from various fields, work tirelessly to provide personalized care tailored to each patient's needs.
    </p>
    <p className='text__para mt-[30px]'>
    With a commitment to excellence, our doctors stay updated with the latest advancements in medical science and technology. This ensures that patients receive cutting-edge treatments and therapies, leading to improved outcomes and enhanced quality of life. At every step of the patient journey, our hospital network strives to uphold the highest standards of care, ensuring that every individual receives the attention and support they deserve.
    </p>
    <Link to='/'>
    <button className='btn'> Learn More</button>
    
    </Link>

    </div>
  </div>

</div>

  </section>
    
  
}

export default About