import { useSelector } from "react-redux";
import tw from "tailwind-styled-components";
import { selectTotalProducts } from "../redux/selectors";
import Pagination from "./Pagination";
import ProductsContainer from "./ProductsContainer";
import FiltersContainer from "./FiltersContainer";
import ProductTypes from "./Filters/ProductTypes";

const Container = tw.div`
    font-bold text-3xl w-full flex flex-row flex-grow py-16 bg-bg-gray
`;

function PageContainer() {
  const totalProducts = useSelector(selectTotalProducts);
  return (
    <Container>
      <div className="w-3/12 pr-10 pl-28 self-start">
        <FiltersContainer />
      </div>
      <div className="flex flex-col w-6/12">
        <div className="font-normal text-text-gray">Products</div>
        <div className="flex flex-row mt-3 gap-3">
          <ProductTypes />
        </div>
        <ProductsContainer />
        <Pagination itemsTotal={totalProducts} itemsPerPage={16} />
      </div>
      <div className="w-3/12 pl-10">
        <div className="border-8 border-primary-blue w-96 h-96 justify-between flex flex-col p-7">
          <div className=" overflow-y-scroll flex flex-col">CarITems</div>
          <div className="border-4 border-primary-blue w-max h-max py-2 px-4 self-end">
            Cart Total
          </div>
        </div>
      </div>
    </Container>
  );
}

export default PageContainer;
