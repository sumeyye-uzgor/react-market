import CheckboxInput from "../FormElements/CheckboxInput";
import { useEffect, useState } from "react";
import { selectCompanies } from "../../redux/selectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/actions";

const Companies = ({ companiesArray, setCompaniesArray, tagsArray }) => {
  const dispatch = useDispatch();
  const companies = useSelector(selectCompanies);
  const [brandInput, setBrandInput] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState([
    { name: "All", slug: "All" },
    ...companies,
  ]);
  useEffect(() => {
    setFilteredCompanies([
      { name: "All", slug: "All" },
      ...companies.filter((company) =>
        company.name.toLowerCase().includes(brandInput.toLowerCase())
      ),
    ]);
  }, [brandInput, setFilteredCompanies, companies]);

  useEffect(() => {
    filteredCompanies.length !== companiesArray.length &&
      setCompaniesArray((companiesArray) =>
        companiesArray.filter((brand) => brand !== "All")
      );
  }, [companies, filteredCompanies, setCompaniesArray]);

  useEffect(() => {
    dispatch(
      setFilters((products) => ({
        companiesArray: companiesArray,
        tagsArray: tagsArray,
      }))
    );
  }, [companiesArray, tagsArray, dispatch]);
  return (
    <div className="w-full bg-bg-white mt-5 flex flex-col px-4 pb-4 h-80 rounded-sm">
      <div className="sticky top-0 left-0 w-full bg-bg-white z-10 py-4">
        <input
          onChange={(e) => setBrandInput(e.target.value)}
          placeholder="Brands"
          className="w-full border-border-gray border-2 rounded-md p-4"
        />
      </div>
      <div className="overflow-y-scroll">
        {filteredCompanies.map((company) => (
          <CheckboxInput
            key={company.slug}
            label={company.name}
            id={company.slug}
            labelArray={companiesArray}
            setLabelArray={setCompaniesArray}
            filteredLabels={filteredCompanies}
          />
        ))}
      </div>
    </div>
  );
};

export default Companies;
