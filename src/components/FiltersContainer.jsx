import Sorting from "./Filters/Sorting";
import Companies from "./Filters/Companies";
import Tags from "./Filters/Tags";
import { useState } from "react";

const ProductsContainer = () => {
  const [tagsArray, setTagsArray] = useState([]);
  const [companiesArray, setCompaniesArray] = useState([]);

  return (
    <div className="w-full flex flex-col text-base text-text-gray font-medium">
      <div className="">Sorting</div>
      <Sorting />
      <div className="mt-10">Brands</div>
      <Companies
        companiesArray={companiesArray}
        setCompaniesArray={setCompaniesArray}
        tagsArray={tagsArray}
      />
      <div className="mt-10">Tags</div>
      <Tags
        companiesArray={companiesArray}
        setTagsArray={setTagsArray}
        tagsArray={tagsArray}
      />
    </div>
  );
};

export default ProductsContainer;
