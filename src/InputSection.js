import React, { useState } from "react";

const InputSection = ({ step }) => {
  // Use the 'step' prop to determine what to render
  return (
    <div>
      {/* Conditional rendering based on the 'step' value */}
      {step === 1 && (
        <div>
          Pending to create step1.js that file will have the view and the logic
          of how that view will behave will be on functions inside that, I still
          need to lift more state on the createUserForm so it can hold all the
          input from the steps.
        </div>
      )}
      {step === 2 && <div>Content for Step 2</div>}
      {/* Add similar conditions for other steps */}
    </div>
  );
};

export default InputSection;
