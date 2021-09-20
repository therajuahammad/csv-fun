import { NavItem } from "../styles";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavbarMenu = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/view">View</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
