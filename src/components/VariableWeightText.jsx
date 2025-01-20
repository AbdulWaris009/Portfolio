import PropTypes from 'prop-types';

const VariableWeightText = ({ regularText, extraboldText, invert = false }) => {
  return (
    <h2 className={`leading-[3.5rem] text-5xl font-display font-regula text-black ${invert && 'invert'}`}>
      {regularText} <span className="font-extrabold">{extraboldText}</span>
    </h2>
  );
};

// Prop validation
VariableWeightText.propTypes = {
  regularText: PropTypes.string.isRequired, // Expecting a string for regular text
  extraboldText: PropTypes.string.isRequired, // Expecting a string for the extrabold text
  invert: PropTypes.bool, // Optional boolean for applying the "invert" class
};

export default VariableWeightText;
