import { useSelector } from "react-redux";
import tw from "tailwind-styled-components";
import { selectTotalProducts } from "../redux/selectors";
import Pagination from "./Pagination";
import ProductsContainer from "./ProductsContainer";
import FiltersContainer from "./FiltersContainer";
import ProductTypes from "./Filters/ProductTypes";

const Container = tw.div`
    font-bold text-3xl w-full flex flex-row items-center flex-grow py-16 bg-bg-gray
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
      <div className="w-3/12"></div>
    </Container>
  );
}

export default PageContainer;
