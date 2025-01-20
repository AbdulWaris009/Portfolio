import BoyGraphic from '../assets/boy.svg'
import InstagramIcon from '../assets/Instagram.svg'
import SocialButton from '../components/SocialButton'
import LinkedinIcon from '../assets/linkedin.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const socialLinks = [
  {
    icon: InstagramIcon,
    link: "https://Instagram.com"
  },
  {
    icon: LinkedinIcon,
    link: "https://linkedin.com/in/abdul-waris009"
  },
]

const Hero = () => {

  useGSAP(() => {
    gsap.from(".box", {
     x:-300,
     opacity: 0,
     stagger: 1,
     duration:1,
    });
  });
  useGSAP(() => {
    gsap.from(".img", {
     opacity: 0,
     duration:1,
     delay:1,
    });
  });

  return (
    <div className="px-4 py-5 md:px-16 md:py-[48px] lg:px-20 lg:py-[60px]">
      <div className="px-8 flex flex-col-reverse lg:flex-row-reverse md:justify-between items-center gap-5 lg:gap-10">
        {/* Boy Graphic */}
        <img 
          src={BoyGraphic} 
          alt="Graphic of a boy representing Abdul Waris" 
          className=" img w-full lg:w-auto" 
        />
        
        {/* Content */}
        <div className="  space-y-5">
          <h1 className="box font-sora text-5xl leading-[56px] text-black">
            Hello I&apos;am <span className="font-extrabold">Abdul Waris.</span>
          </h1>
          <h2 className="box font-sora text-5xl leading-[56px] text-black">
            <span className="font-extrabold">Mern Stack</span> Developer
          </h2>
          <h2 className="box font-sora text-5xl leading-[56px] text-black">
            From <span className="font-extrabold">India.</span>
          </h2>
          <p className=" box text-black font-display py-4">
            I’m Abdul Waris, a passionate full-stack developer dedicated to creating dynamic, user-focused web applications. With love for coding and problem-solving, I’m always ready to turn innovative ideas into impactful solutions. 
          </p>

          <div className="  box flex gap-8 items-center">
            {socialLinks.map((socialItem) => (
              <SocialButton 
                key={socialItem.link} 
                icon={socialItem.icon} 
                link={socialItem.link} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
