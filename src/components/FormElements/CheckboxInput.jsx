import CheckIcon from "../../assets/check-solid.svg";

const CheckboxInput = ({
  labelArray,
  setLabelArray,
  id,
  label,
  filteredLabels,
  isTags,
}) => {
  const handleClick = () => {
    if (id === "All") {
      if (labelArray.find((label) => label === "All")) {
        let filteredLabelArray = [...labelArray];
        for (let filtered of filteredLabels) {
          filteredLabelArray = filteredLabelArray.filter((label) =>
            isTags ? filtered !== label : filtered.slug !== label
          );
        }
        filteredLabelArray = filteredLabelArray.filter(
          (label) => label !== "All"
        );
        setLabelArray([...filteredLabelArray]);
      } else {
        setLabelArray([
          "All",
          ...labelArray,
          ...filteredLabels.map((label) => (isTags ? label : label.slug)),
        ]);
      }
    } else {
      labelArray.find((label) => label === id)
        ? setLabelArray([...labelArray].filter((label) => id !== label))
        : setLabelArray([...labelArray, id]);
    }
  };
  return (
    <div
      className="flex flex-row gap-3 items-center cursor-pointer p-2"
      onClick={handleClick}
    >
      <div
        className="w-6 h-6 border border-border-gray rounded-md p-1 shadow-md "
        name={id}
        id={id}
      >
        {labelArray && labelArray.find((label) => label === id) && (
          <img src={CheckIcon} alt="tick" className="" />
        )}
      </div>
      <span>{label}</span>
    </div>
  );
};

export default CheckboxInput;
