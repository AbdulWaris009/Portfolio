
import PropTypes from 'prop-types'; // Import PropTypes
import ResumePath from '../assets/resume.pdf'; // Import the PDF file

const Button = ({ children }) => {
  return (
    <a
      href={ResumePath}
      download="resume.pdf"
      className="hover:cursor-pointer flex items-center gap-2 px-5 py-4 font-display font-semibold text-lg leading-[24px] text-white bg-black rounded hover:bg-primary"
    >
      {children}
    </a>
  );
};

// Prop validation
Button.propTypes = {
  children: PropTypes.node.isRequired, // Validate the children prop
};

export default Button;
