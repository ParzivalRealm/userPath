import React from "react";

const Skill = ({ skill, setSkills, isSelected, setIsSelected }) => {
  const handleClick = () => {
    console.log(skill);
    setIsSelected(!isSelected); // Toggle selection state
    setSkills(skill); // Update the skills in parent state
  };

  return (
    <div
      className={`inline-flex items-center justify-center cursor-pointer border ${
        isSelected ? "bg-gray-300 text-white" : "bg-white text-black"
      } font-bold text-sm px-4 py-2 rounded-full`}
      onClick={handleClick}
    >
      + {skill}
    </div>
  );
};

export default Skill;
