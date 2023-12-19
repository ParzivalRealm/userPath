import React, { useState } from "react";
import Process from "./Process";
import TextField from "@mui/material/TextField";

const StepFour = ({ setIsDisabled }) => {
  const [processes, setProcesses] = useState([]);
  const [selectedProcess, setSelectedProcess] = useState(null);

  const handleSelection = (process) => {
    console.log(process);
    const newProcesses = [...processes];
    if (!newProcesses.includes(process)) {
      newProcesses.push(process);
      setProcesses(newProcesses); // Update the array of processes
      setIsDisabled(false); // Enable the Next button or other actions
    }
  };

  return (
    <div>
      <h1>Step Three</h1>
      <h2 className="text-xl font-semibold mb-4">Your Processes:</h2>
      <TextField
        label="Professional Role"
        multiline
        rows={1}
        variant="outlined"
        fullWidth
        placeholder="Describe your professional role"
        value={processes.join(", ")} // Join the processes array into a string for display
      />
      {/* Pass the process name directly as a prop */}
      <Process
        process="Tax Law Process"
        isSelected={selectedProcess === "Tax Law Process"}
        setIsSelected={() =>
          setSelectedProcess(
            selectedProcess === "Tax Law Process" ? null : "Tax Law Process"
          )
        }
        setProcesses={handleSelection}
      />
    </div>
  );
};

export default StepFour;
