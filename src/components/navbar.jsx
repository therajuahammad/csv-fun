import { NavItem } from "../styles";
import { useSelector } from "react-redux";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavbarMenu = () => {
<<<<<<< HEAD
  const { renderedData } = useSelector((state) => state.data);
=======
  const csvData = useSelector((state) => state.data);
>>>>>>> 11e6054e5441bb33890370b23401e9afd62a08e9

  return (
    <Navbar bg="dark" variant="dark" className="mb-5">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <NavItem to="/">Home</NavItem>
<<<<<<< HEAD
            {renderedData.length > 0 && (
=======
            {csvData.length > 0 && (
>>>>>>> 11e6054e5441bb33890370b23401e9afd62a08e9
              <>
                <NavItem to="/table">Table</NavItem>
                <NavItem to="/graph">Graph</NavItem>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
