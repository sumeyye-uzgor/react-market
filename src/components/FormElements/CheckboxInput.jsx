import CheckIcon from "../../assets/check-solid.svg";

const CheckboxInput = ({ setSortLabel, sortLabel, id, label }) => {
  return (
    <div
      className="flex flex-row gap-3 items-center cursor-pointer p-2"
      onClick={() => setSortLabel(id)}
    >
      <div
        className="w-6 h-6 border border-border-gray rounded-md p-1 shadow-md "
        name="sorting"
        id={id}
      >
        {sortLabel === id && <img src={CheckIcon} alt="tick" className="" />}
      </div>
      <span>{label}</span>
    </div>
  );
};

export default CheckboxInput;
