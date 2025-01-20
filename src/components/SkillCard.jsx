import PropTypes from 'prop-types';

const SkillCard = ({ skillLogo, skillName }) => {
  return (
    <div className="bg-white hover:invert flex items-center justify-center aspect-square shadow-md flex flex-col items-center gap-y-4 p-6 border border-black border-2 rounded">
      <img src={skillLogo} className="w-[56px] h-[56px]" alt={skillName} />
      <p className="text-black font-display font-bold text-xl leading-[24px]">{skillName}</p>
    </div>
  );
};

// Prop validation
SkillCard.propTypes = {
  skillLogo: PropTypes.string.isRequired, // Expecting a string (URL of the image)
  skillName: PropTypes.string.isRequired, // Expecting a string (name of the skill)
};

export default SkillCard;
