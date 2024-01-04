import React, { useState } from "react";

const Process = ({ process, onSelectProcess }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected); // Toggle selection state
    onSelectProcess(process, !isSelected); // Pass the process and its new selection state
  };

  return (
    <div
      className={`inline-flex items-center justify-center cursor-pointer border ${
        isSelected ? "bg-gray-300 text-white" : "bg-white text-black"
      } font-bold text-sm px-4 py-2 rounded-full m-1`}
      onClick={handleClick}
    >
      + {process}
    </div>
  );
};

export default Process;
