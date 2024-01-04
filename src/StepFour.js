import React, { useState, useEffect } from "react";
import Process from "./Process";
import TextField from "@mui/material/TextField";
import { useOpenAISkillSuggester } from "./api";

const StepFour = ({
  setIsDisabled,
  skills,
  profesionalRole,
  onSelectProcess,
}) => {
  const [processes, setProcesses] = useState([]);
  const [suggestedProcesses, setSuggestedProcesses] = useState([]);
  const [fetchResponse, isLoading, error] = useOpenAISkillSuggester();

  const handleTextFieldChange = (event) => {
    const newProcesses = event.target.value
      .split(",")
      .map((processes) => processes.trim());
    setProcesses(newProcesses);
    onSelectProcess(newProcesses);
  };

  useEffect(() => {
    if (skills.length > 0) {
      fetchResponse({
        profesionalRole: profesionalRole,
        caseNumber: 2,
        skills: skills.join(", "), // Join the skills array into a string cause it's going to be sent to the API as part of the text
      })
        .then((response) => {
          const processes = response
            .split(",")
            .map((process) => process.trim());
          setSuggestedProcesses(processes);
        })
        .catch(console.error);
    }
  }, [skills, profesionalRole, fetchResponse]); // Run when skills change

  const handleSelection = (process, isSelected) => {
    if (isSelected && !processes.includes(process)) {
      setProcesses([...processes, process]); // Add the process to the list
    } else if (!isSelected) {
      setProcesses(processes.filter((p) => p !== process)); // Remove the process from the list
    }
    setIsDisabled(false); // Enable the Next button or other actions
  };

  return (
    <div>
      <h1>Step Four</h1>
      <h2 className="text-xl font-semibold mb-4">Your Processes:</h2>
      <TextField
        label="Processes"
        multiline
        rows={1}
        onChange={handleTextFieldChange}
        variant="outlined"
        fullWidth
        placeholder="Selected processes will appear here"
        value={processes.join(", ")} // Join the processes array into a string for display
      />
      {isLoading ? (
        <p>Loading suggested processes...</p>
      ) : (
        // Example processes, replace with actual data from your API or state
        suggestedProcesses.map((process, index) => (
          <Process
            key={index}
            process={process}
            onSelectProcess={handleSelection}
          />
        ))
      )}
    </div>
  );
};

export default StepFour;
