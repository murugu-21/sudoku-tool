import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/" className="logo">
        <img
          alt=""
          src="/favicon.ico"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Sudoku
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/" style={{ color: "white" }}>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/upload" style={{ color: "white" }}>
              Upload
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about" style={{ color: "white" }}>
              About
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
