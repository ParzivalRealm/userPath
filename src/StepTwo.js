import TextField from "@mui/material/TextField";

const StepTwo = ({ onSelectProfesionalRole, setIsDisabled }) => {
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
