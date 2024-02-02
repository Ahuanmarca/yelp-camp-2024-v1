import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar className="sticky-top" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">YelpCamp</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/all">Campgrounds</Nav.Link>
          <Nav.Link href="/create">New Campground</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
