import RadioInput from "../FormElements/RadioInput";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sortProducts } from "../../redux/actions";
const Sorting = () => {
  const [sortLabel, setSortLabel] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sortProducts(sortLabel));
  }, [sortLabel, dispatch]);
  return (
    <div className="w-full bg-bg-white mt-5 flex flex-col p-4 rounded-sm">
      <RadioInput
        label="Price low to high"
        id="lowToHigh"
        setSortLabel={setSortLabel}
        sortLabel={sortLabel}
      />
      <RadioInput
        label="Price high to low"
        id="highToLow"
        setSortLabel={setSortLabel}
        sortLabel={sortLabel}
      />
      <RadioInput
        label="New to old"
        id="newToOld"
        setSortLabel={setSortLabel}
        sortLabel={sortLabel}
      />
      <RadioInput
        label="Old to new"
        id="oldToNew"
        setSortLabel={setSortLabel}
        sortLabel={sortLabel}
      />
    </div>
  );
};

export default Sorting;
