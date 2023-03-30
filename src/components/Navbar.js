import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
    <NavbarBs sticky="top" className="Navbar">
        <Container>
            <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to="/Vote" as={NavLink}>
                    Vote
                </Nav.Link>
                <Nav.Link to="/Form" as={NavLink}>
                    Form
                </Nav.Link>
                <Nav.Link to="/QuizPage" as={NavLink}>
                    Quiz
                </Nav.Link>
            </Nav>
        </Container>
    </NavbarBs>
    )
}
export default Navbar;