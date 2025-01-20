
import PropTypes from 'prop-types';
import LogoGraphic from '../assets/logo.svg';

const Logo = ({ invert = false }) => {
  return (
    <span className={`flex gap-3 items-center ${invert && 'invert'}`}>
      <img src={LogoGraphic} className="h-10" alt="Logo" />
      <p className="font-sora font-bold text-lg leading-[24px] text-black">
        Portfolio
      </p>
    </span>
  );
};

// Prop validation
Logo.propTypes = {
  invert: PropTypes.bool, // Validate the invert prop (assuming it's a boolean)
};

export default Logo;
