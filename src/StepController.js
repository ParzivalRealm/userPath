// Accept props as an argument and destructure them
const StepController = ({ currentStep, setStep, maxCount }) => {
  return (
    <div
      className="flex flex-row-reverse justify-center items-center rounded-md bg-separator-gray"
      style={{
        width: "37px",
        height: "35px",
        float: "right",
      }}
    >
      <p>
        {currentStep}/{maxCount}
      </p>
    </div>
  );
};

export default StepController;
