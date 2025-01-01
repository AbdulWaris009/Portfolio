import VariableWeightText from "../components/VariableWeightText";
import AboutImage from '../assets/about_me.svg'

const AboutMe = () => {
  return (
    <div className="px-4 py-10 md:px-16 md:py-[48px] lg:px-20 lg:py-[60px]">
      <div className="px-8 flex flex-col md:flex-row justify-between items-start gap-x-16">
      
        <img src={AboutImage} className="w-auto md:w-[320px] lg:w-[480px]" />
        <div className="mt-8 md:mt-0">
          <VariableWeightText 
            regularText="About"
            extraboldText="Me"
          />
          <p className="text-zinc-500 font-display py-4">
            Hello, I’m Abdul Waris, a passionate and driven full-stack developer with a solid foundation in computer applications. I hold a Bachelor’s degree in Computer Applications (BCA) and am currently advancing my expertise by pursuing a Master’s in Computer Applications (MCA). With a strong command of modern web technologies, I specialize in crafting dynamic, responsive, and user-friendly applications. My enthusiasm for coding and problem-solving fuels my desire to create innovative solutions that make a difference. Constantly learning and evolving, I aim to stay at the forefront of technology while contributing meaningfully to impactful projects. Let’s build something amazing together!
          </p>
          
        </div>
      </div>
    </div>
  )
}

export default AboutMe;
