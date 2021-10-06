import CheckboxInput from "../FormElements/CheckboxInput";
import { useState } from "react";
import { selectCompanies } from "../../redux/selectors";
import { useSelector } from "react-redux";

const Companies = () => {
  const [sortLabel, setSortLabel] = useState("");
  const companies = useSelector(selectCompanies);

  return (
    <div className="w-full bg-bg-white mt-5 flex flex-col px-4 pb-4 h-80 rounded-sm">
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
            sortLabel={sortLabel}
            setSortLabel={setSortLabel}
          />
        ))}
      </div>
    </div>
  );
};

export default Companies;
