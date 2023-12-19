import React, { useState } from "react";
import "./App.css";
import TopBar from "./TopBar";
import CreateUserForm from "./CreateUserForm";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="App">
      <TopBar />
      <CreateUserForm
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        maxCount={4}
      />
    </div>
  );
}

export default App;
