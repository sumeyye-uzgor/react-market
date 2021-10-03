import tw from "tailwind-styled-components";
import Navbar from "./components/Navbar";
import PageContainer from "./components/PageContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDataStartAsync } from "./redux/actions";

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataStartAsync());
  }, []);
  return (
    <Container style={{ minHeight: "100vh" }}>
      <Navbar />
      <PageContainer />
      <Footer>&#169;2019 Market . Privacy Policy</Footer>
    </Container>
  );
}

export default App;
