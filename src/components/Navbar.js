import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
    <NavbarBs className="Navbar">
        <Container>
            <Nav>
                <Nav.Link to="/" as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to="/Vote" as={NavLink}>
                    Vote
                </Nav.Link>
                <Nav.Link to="/Quiz" as={NavLink}>
                    Quiz
                </Nav.Link>
            </Nav>
        </Container>
    </NavbarBs>
    )
}
export default Navbar;