import React from "react";
import { NavLink } from "react-router-dom";
import authService from "../services/auth-service";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import IconButton from "@mui/icons-material/IconButton";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
// import AddIcon from "@material-ui/icons/Add";
// import RemoveIcon from "@material-ui/icons/Remove";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../style/general.css";
import "../style/navBar.css";
import { AiOutlineLogout } from "react-icons/ai";

//passing props on line 6

const NavBar = ({ isLoggedIn, user, setUser, cart }) => {
  const logoutUser = () => {
    authService.logout().then(() => {
      setUser(null, false).then(() => {
        this.props.history.push("/home");
      });
    });
  };

  const calculateCartItems = (anyCart) => {
    return Object.keys(anyCart).length === 0
      ? 0
      : Object.keys(anyCart).reduce(
          (total, item) => total + anyCart[item].quantity,
          0
        );
  };

  return (
    <div className="navBar">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand className="navBar-logo" href="/home">
            {/* Cedar & Pine */}
              <img src="/logo6.png" className="logo" alt="logo" />
          </Navbar.Brand>
          <div className="main-nav-links">
            <NavLink to="/candles/all">Candles</NavLink>
            <NavLink to="/waxmelts">Wax Melts</NavLink>
            <NavLink to="/diffusers">Diffusers</NavLink>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              // className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <>
                <div
                  className="nav-icons"
                  style={{ display: "block", padding: 8 }}
                >
                  <div>
                    <Badge
                      color="secondary"
                      badgeContent={calculateCartItems(cart)}
                    >
                      <NavLink to="/cart">
                        {" "}
                        <ShoppingBasketOutlinedIcon />{" "}
                      </NavLink>
                    </Badge>
                  </div>
                </div>
              </>
              {isLoggedIn && user && (
                <>
                  <Nav.Link>
                    <NavLink to="/private">
                      <AccountCircleOutlinedIcon />
                    </NavLink>
                  </Nav.Link>
                  {/* {user.firstName}'s Account */}
                  <NavLink to="/">
                    {/* <button onClick={() => logoutUser()}> */}
                    <AiOutlineLogout onClick={() => logoutUser()} />
                    {/* </button> */}
                  </NavLink>
                </>
              )}
              {!isLoggedIn && (
                <>
                  {/* <Nav.Link>
                  <NavLink to="/signup">Sign Up</NavLink>
                </Nav.Link> */}
                  <Nav.Link>
                    <NavLink to="/login">
                      <AccountCircleOutlinedIcon />
                    </NavLink>
                  </Nav.Link>
                </>
              )}
            </Nav>
            {/* <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
