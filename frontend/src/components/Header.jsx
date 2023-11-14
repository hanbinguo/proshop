import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/bouquiniste_logo.png";
const Header = () => {
	return (
		<header>
			<Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
				<Container>
					<Navbar.Brand href="/">
						<img
							style={{ maxWidth: "30px", height: "auto" }}
							src={logo}
							alt="bouquiniste logo"
						/>
						Bouquiniste
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<LinkContainer to="/cart">
								<Nav.Link>
									<FaShoppingCart /> Cart
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/login">
								<Nav.Link>
									<FaUser /> Sign In
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
