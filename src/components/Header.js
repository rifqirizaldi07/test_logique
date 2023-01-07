import React from "react";
import { Navbar, Container} from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" variant="light" className="navBg">
        <Container fluid className="px-4">
          <Navbar.Brand href="/" className="text-white">Music Kito</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="text-white">
              Guest
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div >
  );
}

export default Header