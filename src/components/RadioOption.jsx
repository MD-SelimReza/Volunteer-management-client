const RadioOption = ({ value, selectedOption, handleSelect, label }) => {
  return (
    <h2 className="flex gap-3" onClick={() => handleSelect(value)}>
      <input
        type="radio"
        name="events"
        checked={selectedOption === value}
        onChange={() => handleSelect(value)}
      />
      <span>{label}</span>
    </h2>
  );
};

export default RadioOption;
