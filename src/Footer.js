import React from "react";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";

const Footer = ({
  step,
  totalSteps,
  isDisabled,
  setIsDisabled,
  handleNextStep,
}) => {
  const progress = (step / totalSteps) * 100; // Calculate progress as a percentage

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200">
      <LinearProgress variant="determinate" value={progress} />
      <div className="flex justify-between items-center mt-2">
        <Button variant="text" className="text-gray-600">
          Skip for now
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={isDisabled}
          onClick={handleNextStep}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Footer;
