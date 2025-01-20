import PropTypes from 'prop-types';

const SocialButton = ({ icon, link }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className="p-5 aspect-square border border-2 rounded-md border-black hover:invert bg-white"
    >
      <img className="w-5 h-5" src={icon} alt="social icon" />
    </a>
  );
};

// Prop validation
SocialButton.propTypes = {
  icon: PropTypes.string.isRequired, // Expecting a string (URL of the icon image)
  link: PropTypes.string.isRequired, // Expecting a string (URL for the link)
};

export default SocialButton;
