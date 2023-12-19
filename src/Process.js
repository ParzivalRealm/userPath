import React from "react";

const Process = ({ process, setProcesses, isSelected, setIsSelected }) => {
  const handleClick = () => {
    console.log(process);
    setIsSelected(!isSelected); // Toggle selection state
    setProcesses(process); // Update the processes in parent state
  };

  return (
    <div
      className={`inline-flex items-center justify-center cursor-pointer border ${
        isSelected ? "bg-gray-300 text-white" : "bg-white text-black"
      } font-bold text-sm px-4 py-2 rounded-full`}
      onClick={handleClick}
    >
      + {process}
    </div>
  );
};

export default Process;
