import React, { useState, useEffect } from "react";
import Skill from "./Skills";
import TextField from "@mui/material/TextField";

const StepThree = ({ setIsDisabled, profesionalRole }) => {
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [suggestedSkills, setSuggestedSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchOpenAIChatResponse = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer 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",
            },
            body: JSON.stringify({
              model: "gpt-3.5-turbo",
              messages: [
                {
                  role: "system",
                  content: "You are a helpful assistant.",
                },
                {
                  role: "user",
                  content: `I am a ${profesionalRole}. What skills do I need?`,
                },
              ],
            }),
          }
        );

        const data = await response.json();
        const skillsText = data.choices[0].message.content; // Assuming the API returns the skills in the message content
        setSuggestedSkills(skillsText.split(", ")); // Split the skills by comma and space
      } catch (error) {
        console.error(
          "There was an error fetching the OpenAI response:",
          error
        );
      }
      setIsLoading(false);
    };

    // Call the function if the profesionalRole is not empty
    if (profesionalRole) {
      fetchOpenAIChatResponse();
    }
  }, [profesionalRole]); // Dependency array, so the effect runs when profesionalRole changes

  const handleSelection = (skill) => {
    console.log(skill);
    const newSkills = [...skills];
    if (!newSkills.includes(skill)) {
      newSkills.push(skill);
      setSkills(newSkills); // Update the array of skills
      setIsDisabled(false); // Enable the Next button or other actions
    }
  };

  return (
    <div>
      <h1>Step Three</h1>
      <h2 className="text-xl font-semibold mb-4">Your Skills:</h2>
      <TextField
        label="Professional Role"
        multiline
        rows={1}
        variant="outlined"
        fullWidth
        placeholder="Describe your professional role"
        value={skills.join(", ")} // Join the skills array into a string for display
      />
      {isLoading ? (
        <p>Loading suggested skills...</p>
      ) : (
        suggestedSkills.map((skill, index) => (
          <Skill key={index} skill={skill} setSkills={handleSelection} />
        ))
      )}
    </div>
  );
};

export default StepThree;
