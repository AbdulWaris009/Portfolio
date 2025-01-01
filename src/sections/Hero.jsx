import BoyGraphic from '../assets/boy.svg'
import TwitterIcon from '../assets/twitter.svg'
import InstagramIcon from '../assets/Instagram.svg'
import SocialButton from '../components/SocialButton'
import LinkedinIcon from '../assets/linkedin.png'

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
  return (
    <div className="px-4 py-10 md:px-16 md:py-[48px] lg:px-20 lg:py-[60px]">
      <div className="px-8 flex flex-col-reverse lg:flex-row-reverse md:justify-between items-center gap-5 lg:gap-10">
        {/* Boy Graphic */}
        <img 
          src={BoyGraphic} 
          alt="Graphic of a boy representing Abdul Waris" 
          className="w-full lg:w-auto" 
        />
        
        {/* Content */}
        <div className="space-y-5">
          <h1 className="font-sora text-5xl leading-[56px] text-black">
            Hello I&apos;am <span className="font-extrabold">Abdul waris.</span>
          </h1>
          <h2 className="font-sora text-5xl leading-[56px] text-black">
            <span className="font-extrabold">Mern Stack</span> Developer
          </h2>
          <h2 className="font-sora text-5xl leading-[56px] text-black">
            Based In <span className="font-extrabold">India.</span>
          </h2>
          <p className="text-zinc-500 font-display py-4">
            I’m Abdul Waris, a passionate full-stack developer dedicated to creating dynamic, user-focused web applications. With a love for coding and problem-solving, I’m always ready to turn innovative ideas into impactful solutions. 🚀
          </p>

          <div className="flex gap-8 items-center">
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
