import Logo from '../components/Logo';
import Button from '../components/Button';

const Header = () => {
  return (
    <header className="px-4 py-4 md:px-8 lg:px-12">
      <div className="flex items-center justify-between">
        <div className="flex-shrink-0">
          <Logo />
        </div>

        <div className="ml-4">
        <Button className="flex items-center gap-2 px-3 py-1 text-sm font-medium bg-primary text-white rounded-lg hover:bg-gray-700 transition-all duration-200 sm:px-4 sm:py-2">
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
