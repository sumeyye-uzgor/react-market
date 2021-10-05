import { useState } from "react";
import { useSelector } from "react-redux";
import CheckIcon from "../assets/check-solid.svg";
import { selectCompanies, selectTags } from "../redux/selectors";
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
const CheckboxInput = ({ setSortLabel, sortLabel, id, label }) => {
  return (
    <div
      className="flex flex-row gap-2 items-center cursor-pointer p-2"
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
const ProductsContainer = () => {
  const [sortLabel, setSortLabel] = useState("");
  const companies = useSelector(selectCompanies);
  const tags = useSelector(selectTags);
  return (
    <div className="w-full flex flex-col text-base text-text-gray font-medium">
      <div className="">Sorting</div>
      <div className="w-full bg-bg-white mt-5 flex flex-col p-4">
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
      <div className="mt-10">Brands</div>
      <div className="w-full bg-bg-white mt-5 flex flex-col px-4 pb-4 h-80">
        <div className="sticky top-0 left-0 w-full bg-bg-white z-10 py-4">
          <input
            placeholder="Brands"
            className="w-full border-border-gray border-2 rounded-md p-4"
          />
        </div>
        <div className="overflow-y-scroll">
          <CheckboxInput label="All" id="all" />
          {companies.map((company) => (
            <CheckboxInput
              key={company.id}
              label={company.name}
              id={company.name}
            />
          ))}
        </div>
      </div>
      <div className="mt-10">Tags</div>
      <div className="w-full bg-bg-white mt-5 flex flex-col px-4 pb-4 h-80">
        <div className="sticky top-0 left-0 w-full bg-bg-white z-10 py-4">
          <input
            placeholder="Tags"
            className="w-full border-border-gray border-2 rounded-md p-4 mb-2"
          />
        </div>
        <div className="overflow-y-scroll">
          <CheckboxInput label="All" id="all" />
          {tags.map((tag, idx) => (
            <CheckboxInput key={idx} label={tag} id={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
