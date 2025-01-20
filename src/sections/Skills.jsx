import SkillCard from "../components/SkillCard";
import VariableWeightText from "../components/VariableWeightText";

import GitLogo from '../assets/git.svg'
import JSLogo from '../assets/js.svg'
import HtmlLogo from '../assets/Html.svg'
import CssLogo from '../assets/Css.svg'
import ReactLogo from '../assets/React.svg'
import NodeLogo from '../assets/Node js.svg'
import MongoDBLogo from '../assets/mongodb.svg'
import BootsstrapLogo from '../assets/bootstrap.svg'
import TailwindLogo from '../assets/tailwind-css.svg'
import ExpressjsLogo from '../assets/express-js.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const skillsData = [
  {logo:HtmlLogo,name:'Html',},
  {logo:CssLogo,name:'Css',},
  { logo: JSLogo, name: 'JavaScript', },
  {logo:ReactLogo,name:'React',},
  {logo:BootsstrapLogo,name:'Bootstrap'},
  {logo:TailwindLogo,name:'Tailwind'},
  {logo:NodeLogo,name:'Nodejs',},
  {logo:ExpressjsLogo,name:'Express js',},
  {logo:MongoDBLogo,name:'MongoDB',},
  { logo: GitLogo, name: 'Git', },
]

const Skills = () => {

  useGSAP(() => {
    gsap.from(".card", {
     opacity: 0,
     stagger: 1,
     x:-100,
     scale:0,
    //  yoyo:1,
     duration:2,
    });
  });

  return (
    <div className="bg-black px-4 py-10 md:px-16 md:py-[48px] lg:px-20 lg:py-[60px]">
      <div className="  px-8 flex flex-col items-center gap-5">
        <VariableWeightText
          regularText="My"
          extraboldText="Skills"
          invert
        />
        <div className=" card mt-8 grid grid-cols-2 gap-x-6 sm:grid-cols-3 md:gap-x-8 md:grid-cols-4 md:gap-x-12 lg:grid-cols-5 lg:gap-x-12 gap-y-10">
          { skillsData.map(skill => {
            return <SkillCard 
              key={skill.skillName} 
              skillLogo={skill.logo} 
              skillName={skill.name}
            />
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills;
