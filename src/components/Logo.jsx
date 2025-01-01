import LogoGraphic from '../assets/logo.svg'

const Logo = ({invert = false}) => {
  return (
    <span className={`flex gap-3 items-center ${invert && 'invert'}`}>
      <img src={LogoGraphic} className="h-10" />
      <p className='font-sora font-bold text-lg leading-[24px] text-black'>
        Portfolio
      </p>
    </span>
  )
}

export default Logo
