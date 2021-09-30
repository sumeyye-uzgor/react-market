import tw from "tailwind-styled-components";

const NavbarComponent = tw.div`
h-16 sticky top-0 left-0 w-full bg-primary-blue text-primary-white
`;
const Navbar = () => {
  return <NavbarComponent>Navbar</NavbarComponent>;
};

export default Navbar;
