const StepOne = ({ onSelectUserType, setIsDisabled }) => {
  const handleClick = (userType) => {
    onSelectUserType(userType);
    setIsDisabled(false);
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
        <div
          className="p-12 m-6 border-4 rounded-md flex flex-col justify-center items-center"
          onClick={() => handleClick("Company")}
        >
          <img
            src="/inhouse.svg"
            alt="In-House Company"
            className="w-24 h-24 mb-4"
          />
          <h2 className="text-2xl font-bold text-center">In-House Company</h2>
        </div>
        <div
          className="p-12 m-6 border-4 rounded-md flex flex-col justify-center items-center"
          onClick={() => handleClick("Law Firm")}
        >
          <img src="/lawfirm.svg" alt="Law Firm" className="w-24 h-24 mb-4" />
          <h2 className="text-2xl font-bold text-center">Law Firm</h2>
        </div>
        <div
          className="p-12 m-6 border-4 rounded-md flex flex-col justify-center items-center"
          onClick={() => handleClick("Individual")}
        >
          <img
            src="/individual.svg"
            alt="Individual"
            className="w-24 h-24 mb-4"
          />
          <h2 className="text-2xl font-bold text-center">Individual</h2>
        </div>
      </div>
    </div>
  );
};
export default StepOne;
