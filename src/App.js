import tw from "tailwind-styled-components";
import Navbar from "./components/Navbar";
const Container = tw.div`
    flex
    items-center
    flex-col
    w-full
`;
const Footer = tw.div`
  h-8
  w-full
  text-primary-blue
  flex
  flex-row
  items-center
  justify-center
`;
function App() {
  return (
    <Container style={{ minHeight: "100vh" }}>
      <Navbar />
      <div className="font-bold text-3xl w-full flex flex-col items-center flex-grow py-16 bg-bg-gray">
        <div className="w-3/12"></div>
        <div className="flex flex-col w-6/12">
          <div className="font-normal text-text-gray">Products</div>
          <div className="flex flex-row mt-3">
            <div className="px-3 py-1 bg-primary-blue text-primary-white font-light text-lg">
              ABC
            </div>
          </div>
          <div className="w-full bg-bg-white mt-5">DEnem</div>
        </div>
        <div className="w-3/12"></div>
      </div>
      <Footer>&#169;2019 Market . Privacy Policy</Footer>
    </Container>
  );
}

export default App;
