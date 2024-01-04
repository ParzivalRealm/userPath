import { Container } from "@mui/material";
import React, { useState } from "react";
import StepController from "./StepController";
import InputSection from "./InputSection";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import Footer from "./Footer";
import StepFour from "./StepFour";

function CreateUserForm({ currentStep, setCurrentStep }) {
  const [userType, setUserType] = useState("");
  const [profesionalRole, setProfesionalRole] = useState("");
  const [skills, setSkills] = useState([]);
  const [process, setProcess] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = () => {
    const formData = { userType, profesionalRole, skills, process };
    console.log(formData);
  };

  const handleNextStep = () => {
    const step = currentStep;
    setCurrentStep(step + 1);
    setIsDisabled(true);
    console.log("next step from handleNextStep", currentStep);
  };

  const handlePreviousStep = () => {
    const step = currentStep;
    setCurrentStep(step - 1);
    setIsDisabled(true);
  };

  const renderStep = () => {
    console.log(currentStep);
    switch (currentStep) {
      case 1:
        return (
          <StepOne
            onSelectUserType={setUserType}
            setIsDisabled={setIsDisabled}
          />
        );
      case 2:
        return (
          <StepTwo
            onSelectProfesionalRole={setProfesionalRole}
            setIsDisabled={setIsDisabled}
          />
        );
      case 3:
        return (
          <StepThree
            profesionalRole={profesionalRole}
            onSelectSkills={setSkills}
            setIsDisabled={setIsDisabled}
          />
        );
      case 4:
        return (
          <StepFour
            skills={skills} // Pass the selected skills to StepFour
            onSelectProcess={setProcess}
            setIsDisabled={setIsDisabled}
            profesionalRole={profesionalRole}
          />
        );
      // ... cases for other steps
      default:
        return null;
    }
  };

  return (
    <div>
      <StepController currentStep={currentStep} maxCount={4} />
      {renderStep()}
      <Footer
        step={currentStep}
        totalSteps={4}
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
        handleSubmit={handleSubmit}
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
      />
    </div>
  );
}

export default CreateUserForm;
