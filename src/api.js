import { useState } from "react";
export const useOpenAISkillSuggester = () => {
  const [isLoading, SetisLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchResponse = async ({
    profesionalRole,
    caseNumber,
    skills = "",
    ignore = "",
  }) => {
    SetisLoading(true);
    let userContent;
    console.log("fetch response", caseNumber);
    console.log("ignore from apijs: ", ignore);
    switch (caseNumber) {
      case 1:
        userContent = `I am a ${profesionalRole}. give me a list of which skills related to my profesional role do I need? keep words at minimum per item and no more context you're not limited to a minimum or maximum amount of words, only the list separated by commas and minimum 30 skills.`;
        break;
      case 2:
        userContent = `My professional Role is: ${profesionalRole}. The skills I excel at are: ${skills}, give me a list of which services i can provide based on my profesional Role and skills, please keep words at minimum per item and no more context you're not limited to a minimum or maximum amount of words, provide list separated by commas, do not use numbers and provide minimum 30 services.`;
        break;
      default:
        userContent = `I am a ${profesionalRole}.`;
        break;
    }
    if (!isLoading) {
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
                  content: userContent,
                },
              ],
            }),
          }
        );
        const data = await response.json();
        console.log("from api.js", data);
        return data.choices[0].message.content;
      } catch (error) {
        setError(error);
        console.error(
          "There was an error fetching the OpenAI response:",
          error
        );
      } finally {
        SetisLoading(false);
      }
    }
  };
  return { fetchResponse, isLoading, error };
};
