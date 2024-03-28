import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">Duelist-Catalog</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">MEN'S</Nav.Link>
            <Nav.Link href="#superhero">WOMEN</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar
