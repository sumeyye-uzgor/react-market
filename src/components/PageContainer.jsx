import tw from "tailwind-styled-components";
import Pagination from "./Pagination";
import ProductsContainer from "./ProductsContainer";

const Container = tw.div`
    font-bold text-3xl w-full flex flex-row items-center flex-grow py-16 bg-bg-gray
`;

function PageContainer() {
  return (
    <Container>
      <div className="w-3/12"></div>
      <div className="flex flex-col w-6/12">
        <div className="font-normal text-text-gray">Products</div>
        <div className="flex flex-row mt-3">
          <div className="px-3 py-1 bg-primary-blue text-primary-white font-light text-lg">
            ABC
          </div>
        </div>
        <ProductsContainer />
        <Pagination itemsTotal={60} itemsPerPage={6} />
      </div>
      <div className="w-3/12"></div>
    </Container>
  );
}

export default PageContainer;
