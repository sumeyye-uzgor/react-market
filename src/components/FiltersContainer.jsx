import Sorting from "./Filters/Sorting";
import Companies from "./Filters/Companies";
import Tags from "./Filters/Tags";

const ProductsContainer = () => {
  return (
    <div className="w-full flex flex-col text-base text-text-gray font-medium">
      <div className="">Sorting</div>
      <Sorting />
      <div className="mt-10">Brands</div>
      <Companies />
      <div className="mt-10">Tags</div>
      <Tags />
    </div>
  );
};

export default ProductsContainer;
