import { NavItem } from "../styles";
import { useSelector } from "react-redux";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavbarMenu = () => {
  const csvData = useSelector((state) => state.data);

  return (
    <Navbar bg="dark" variant="dark" className="mb-5">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <NavItem to="/">Home</NavItem>
            {csvData.length > 0 && (
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
