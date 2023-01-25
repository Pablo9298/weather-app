import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './header.scss';

function Header() {
  return (
    <Navbar expand="lg" className="navbar mb-4">
      <Container>
        <Navbar.Brand href="/weather">Weather</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;