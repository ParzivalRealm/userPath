import React, { useState, useEffect } from "react";
import Skill from "./Skills";
import TextField from "@mui/material/TextField";
import { useOpenAISkillSuggester } from "./api";

const StepThree = ({ setIsDisabled, profesionalRole, onSelectSkills }) => {
  const { fetchResponse, isLoading, error } = useOpenAISkillSuggester();
  const [suggestedSkills, setSuggestedSkills] = useState([]);
  const [skills, setSkills] = useState([]);

  const handleTextFieldChange = (event) => {
    // This function is called when the user types in the TextField
    const newSkills = event.target.value
      .split(",")
      .map((skill) => skill.trim());
    setSkills(newSkills);
    onSelectSkills(newSkills);
  };

  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      const response = await fetchResponse({
        profesionalRole,
        caseNumber: 1,
      });
      if (!ignore) {
        const newSuggestedSkills = response
          .split(",")
          .map((skill) => skill.trim());
        setSuggestedSkills(newSuggestedSkills);
      }
    }
    fetchData();
  }, []);

  const handleSelection = (skill, isSelected) => {
    if (isSelected && !skills.includes(skill)) {
      setSkills([...skills, skill]);
      onSelectSkills([...skills, skill]);
    } else if (!isSelected) {
      setSkills(skills.filter((s) => s !== skill));
      onSelectSkills(skills.filter((s) => s !== skill));
    }
    setIsDisabled(false); // Enable the Next button
  };

  function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }

  return (
    <div>
      <h1>Step Three</h1>
      <h2 className="text-xl font-semibold mb-4">Your Skills:</h2>
      <TextField
        label="Professional Role"
        multiline
        rows={1}
        onChange={handleTextFieldChange}
        variant="outlined"
        fullWidth
        placeholder="Describe your professional role"
        value={skills.join(", ")} // Join the skills array into a string for display
      />
      {isLoading ? (
        <p>Loading suggested skills...</p>
      ) : error ? (
        <p className="text-red-500">API Error: {error.message}</p>
      ) : (
        suggestedSkills.map((skill, index) => (
          <Skill key={index} skill={skill} onSelectSkill={handleSelection} />
        ))
      )}
    </div>
  );
};

export default StepThree;
