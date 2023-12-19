import TextField from "@mui/material/TextField";
import { useState } from "react";

const StepTwo = ({ onSelectProfesionalRole, setIsDisabled }) => {
  const fetchOpenAIChatResponse = async (messages) => {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST", // The HTTP method is POST for sending data
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: messages,
      }),
    });

    const handleSendMessage = async () => {
      const messages = [
        {
          role: "system",
          content: "You are a helpful assistant.",
        },
        {
          role: "user",
          content: "Hello!",
        },
      ];

      const response = await fetchOpenAIChatResponse(messages);
      console.log(response); // Process the response as needed
    };

    const data = await response.json();
    return data;
  };

  const handleInput = (e) => {
    onSelectProfesionalRole(e.target.value);
    setIsDisabled(false);
  };

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h2 className="text-xl font-semibold mb-4">Your Professional Role</h2>
      <TextField
        label="Professional Role"
        multiline
        rows={1}
        variant="outlined"
        fullWidth
        placeholder="Describe your professional role"
        onChange={handleInput}
      />
    </div>
  );
};

export default StepTwo;
