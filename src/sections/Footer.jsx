import Logo from '../components/Logo'

const Footer = () => {
  return (
    <div className="px-4 py-4 md:px-16 md:py-5 lg:px-20 lg:py-6 bg-black">
      <div className="px-8 flex justify-between items-start">
        <Logo invert />
        <div>
          <p className='font-display font-semibold text-white'>@2024 Personal</p>
          <p className='font-display font-semibold text-white'>Made by ABD WARIS</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
