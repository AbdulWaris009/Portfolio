import VariableWeightText from "../components/VariableWeightText";
import AboutImage from '../assets/about_me.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const AboutMe = () => {

  useGSAP(() => {
    gsap.from(".crt", {
     opacity: 0,
     stagger: 1,
     scale:0,
     duration:1,
    });
  });
  useGSAP(() => {
    gsap.from(".text", {
     opacity: 0,
     x:-200,
     duration:1,
    });
  });

  return (
    <div className="px-4 py-10 md:px-16 md:py-[48px] lg:px-20 lg:py-[60px]">
      <div className="px-8 flex flex-col md:flex-row justify-between items-start gap-x-16">
      
        <img src={AboutImage} className=" crt w-auto h-[20rem] md:w-[320px] lg:w-[480px]" />
        <div className="mt-8 md:mt-0">
          <VariableWeightText 
            regularText="About"
            extraboldText="Me"
          />
          <p className="text text-black tracking-wider font-display py-4">
          I am Abdul Waris, a BCA graduate currently pursuing an MCA with a strong foundation in full-stack development. I bring over 6 months of hands-on experience as an intern at Hanumant Technology, where I contributed to building dynamic and responsive applications. Passionate about crafting innovative solutions, I continually enhance my skills to stay ahead in the evolving tech landscape
           
            </p>
          
        </div>
      </div>


      <div className="px-8 flex flex-col-reverse md:flex-row justify-between items-start mt-3 gap-x-16">
  {/* Text Content */}
  <div className="mt-8 md:mt-0 flex-1">
    <VariableWeightText 
      //  regularText="Education"
       extraboldText="Education"
    />
    <div className="mt-4 text">
    <h2 className="font-semibold text-2xl">◼ Master of Computer Application</h2>
    Khwaja Moinuddin Chisthi Language University (2024-26)
    <h2 className="font-semibold text-2xl mt-3 ">◼ Bachelor of Computer Application</h2>
    Khwaja Moinuddin Chisthi Language University (2021-24)
    </div>
   
  </div>

  {/* Image */}
  <div className="flex-1 flex justify-center md:justify-end">
    <img 
      src={AboutImage} 
      alt="About Me" 
      className=" crt w-auto h-[20rem] scale-x-[-1] md:w-[320px] lg:w-[480px]" 
    />
  </div>
</div>


<div className="px-8 flex flex-col md:flex-row justify-between items-start gap-x-16">
      
      <img src={AboutImage} className=" crt w-auto h-[20rem] md:w-[320px] lg:w-[480px] mt-2" />
      <div className="mt-8 md:mt-0 text-right ">
        <VariableWeightText 
          regularText="Work"
          extraboldText="Experience"
        />
        <div className="mt-2 text ">

    <h2 className="font-semibold text-2xl text-right">◼ Mern Stack Developer</h2>
    Hanumant Technology Pvt Ltd. &nbsp; &nbsp;&nbsp;
    ▪ Lucknow
    <p className="text-black tracking-wider font-display py-4 text-left">
    I worked as a MERN stack developer at Hanumant Technology for 6 months, building responsive and dynamic web applications. My expertise includes MongoDB, Express.js, React, and Node.js, focusing on user-friendly solutions.
           
            </p>
    </div>
       
        
      </div>
    </div>


    </div>
  )
}

export default AboutMe;
