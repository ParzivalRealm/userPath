import { Container } from "@mui/material";
import React, { useState } from "react";
import StepController from "./StepController";
import InputSection from "./InputSection";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import Footer from "./Footer";

function CreateUserForm({ currentStep, setCurrentStep }) {
  const [formData, setFormData] = useState({
    userType: "",
    profesionalRole: "",
    skills: [],
    process: [],
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const handleUserTypeSelect = (userType) => {
    setFormData({ ...formData, userType });
  };
  const handleProfesionalRoleSelect = (profesionalRole) => {
    setFormData({ ...formData, profesionalRole });
  };
  const handleSkillsSelect = (skills) => {
    setFormData({ ...formData, skills });
  };
  const handleProcessSelect = (process) => {
    setFormData({ ...formData, process });
  };
  const handleSubmit = () => {
    console.log(formData);
  };
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    setIsDisabled(true);
  };
  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
    setIsDisabled(true);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepOne
            onSelectUserType={handleUserTypeSelect}
            setIsDisabled={setIsDisabled}
          />
        );
      case 2:
        return (
          <StepTwo
            userType={formData.userType}
            onSelectProfesionalRole={handleProfesionalRoleSelect}
            setIsDisabled={setIsDisabled}
          />
        );
      case 3:
        return (
          <StepThree
            userType={formData.userType}
            profesionalRole={formData.profesionalRole}
            onSelectSkills={handleSkillsSelect}
            setIsDisabled={setIsDisabled}
          />
        );
      // ... cases for other steps
      default:
        return null;
    }
  };

  console.log(currentStep);
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
