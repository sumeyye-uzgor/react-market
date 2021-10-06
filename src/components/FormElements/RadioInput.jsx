import CheckIcon from "../../assets/check-solid.svg";

const RadioInput = ({ setSortLabel, sortLabel, id, label }) => {
  return (
    <div
      className="flex flex-row gap-2 items-center cursor-pointer"
      onClick={() => setSortLabel(id)}
    >
      <div
        className="w-5 h-5 border border-border-gray rounded-full p-1 "
        name="sorting"
        id={id}
      >
        {sortLabel === id && <img src={CheckIcon} alt="tick" className="" />}
      </div>
      <span>{label}</span>
    </div>
  );
};
export default RadioInput;
