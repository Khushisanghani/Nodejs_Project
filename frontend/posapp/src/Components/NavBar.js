import { NavLink, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { FaShoppingCart } from 'react-icons/fa';

function NavBar() {
  const navigate = useNavigate();
const cartCount = 1;
const handleclick = () => {
  navigate('/cart');
}
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark" className="shadow-sm">
        <Container>
          <Navbar.Brand href="/">Eshop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-between">
            <Nav className="mx-auto text-center">
              <NavLink to="/" className="nav-link px-3">Home</NavLink>
              <NavLink to="/allproduct" className="nav-link px-3">All Product</NavLink>
            </Nav>
            <div className="d-flex align-items-center gap-3">
              <div style={{ position: 'relative', cursor: 'pointer' }}>
                <FaShoppingCart size={24} color="white" onClick={() => handleclick()}/>
                {cartCount > 0 && (
                  <Badge
                    bg="success"
                    pill
                    style={{
                      position: 'absolute',
                      top: -8,
                      right: -10,
                      fontSize: '0.7rem',
                    }}
                  >
                    {cartCount}
                  </Badge>
                )}
              </div>
              {/* <Button variant="outline-light" className="rounded" >
                Login
              </Button> */}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default NavBar;
