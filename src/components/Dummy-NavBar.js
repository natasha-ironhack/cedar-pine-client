// import React from "react";
// import { NavLink } from "react-router-dom";
// import authService from "../services/auth-service";
// // import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// // import IconButton from "@mui/icons-material/IconButton";
// // import Navbar from "react-bootstrap/Navbar"
// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import Badge from "@material-ui/core/Badge";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import Button from "@material-ui/core/Button";
// import AddIcon from "@material-ui/icons/Add";
// import RemoveIcon from "@material-ui/icons/Remove";

// //passing props on line 6
// const NavBar = ({ isLoggedIn, user, setUser, cart }) => {
// 	@@ -22,6 +28,8 @@ const NavBar = ({ isLoggedIn, user, setUser, cart }) => {
//         );
//   };

//   const [itemCount, setItemCount] = React.useState(1);

//   return (
//     //     <Navbar bg="light" expand="lg">
//     //   <Container fluid>
// 	@@ -88,10 +96,40 @@ const NavBar = ({ isLoggedIn, user, setUser, cart }) => {
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
//           <Badge color="secondary" badgeContent={calculateCartItems(cart)}>
//             {/* <ShoppingCartIcon />{" "} */}
//             <NavLink to="/cart">
//               {" "}
//               <ShoppingCartIcon />{" "}
//             </NavLink>
//           </Badge>
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
// };
// export default NavBar;

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
