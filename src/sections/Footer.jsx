import Logo from '../components/Logo';

const Footer = () => {
  return (
    <div className="px-4 py-4 md:px-16 md:py-5 lg:px-20 lg:py-6 bg-black">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-y-8 md:gap-y-0">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <Logo invert />
        </div>

        {/* Contact Section */}
        <div className="text-center text-white flex-1">
          <h2 className="text-2xl md:text-3xl">For any queries please drop a mail</h2>
          <p className="text-xl md:text-2xl mt-2">✉ warisidrisi77@gmail.com</p>
          <p className="text-lg mt-2 mb-2">or</p>
          <h2 className="text-xl md:text-2xl">📞 +91 8318499624</h2>
        </div>

        {/* Attribution Section */}
        <div className="text-center md:text-right text-white">
          <p className="font-display font-semibold">@2024 Personal</p>
          <p className="font-display font-semibold">Made by ABD WARIS</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
