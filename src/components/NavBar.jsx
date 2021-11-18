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
// import Badge from "@material-ui/core/Badge";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
// import AddIcon from "@material-ui/icons/Add";
// import RemoveIcon from "@material-ui/icons/Remove";

//passing props on line 6

const NavBar = ({ isLoggedIn, user, setUser, cart }) => {
  const logoutUser = () => {
    authService.logout().then(() => {
      setUser(null, false);
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
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Cedar & Pine</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {isLoggedIn && (
              <>
                <Nav.Link href="/private">{user.firstName}'s Account</Nav.Link>
              </>
            )}
            {!isLoggedIn && (
              <>
                <Nav.Link>
                  <NavLink to="/signup">Sign Up</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/login">Login</NavLink>
                </Nav.Link>
              </>
            )}
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

// ----------------------------------------

//     <ul>
//       {/* //if user is logged in, want to show user and these list items */}
//       {isLoggedIn && user && (
//         <>
//           <li>
//             <NavLink to="/candles/all">Cedar & Pine</NavLink>
//           </li>
//           {/* <li>{user.firstName}</li> */}
//           <li>
//             <NavLink to="/private">{user.firstName}'s Account</NavLink>
//           </li>
//           <li>
//             <NavLink to="/">
//               <button onClick={() => logoutUser()}>Logout</button>
//             </NavLink>
//           </li>
//         </>
//       )}
//       {/* //if user isn't logged in, we show these list items */}
//       {!isLoggedIn && (
//         <>
//           <li>
//             <NavLink to="/signup">Sign Up</NavLink>
//           </li>
//           <li>
//             <NavLink to="/login">Login</NavLink>
//           </li>
//         </>
//       )}
//       {/* <NavLink to="/cart">Cart {calculateCartItems(cart)}</NavLink> */}
//       {/* <IconButton type="submit" color="success"> */}
//       {/* <AddShoppingCartIcon></AddShoppingCartIcon> */}
//       {/* </IconButton> */}
//       <div style={{ display: "block", padding: 15 }}>
//         {/* <h4>How to create ShoppingCart Button in ReactJS?</h4> */}
//         <div>
//           {/* <Badge color="secondary" badgeContent={calculateCartItems(cart)}> */}
//           {/* <ShoppingCartIcon />{" "} */}
//           {/* <NavLink to="/cart">
//             {" "}
//             <ShoppingCartIcon />{" "}
//           </NavLink> */}
//           {/* </Badge> */}
//           {/* <ButtonGroup>
//             <Button
//               onClick={() => {
//                 // setItemCount(Math.max(itemCount - 1, 0));
//               }}
//             >
//               {" "}
//               <RemoveIcon fontSize="small" />
//             </Button>
//             <Button
//               onClick={() => {
//                 // setItemCount(itemCount + 1);
//               }}
//             >
//               {" "}
//               <AddIcon fontSize="small" />
//             </Button>
//           </ButtonGroup> */}
//         </div>
//       </div>
//     </ul>
//   );
//  };
