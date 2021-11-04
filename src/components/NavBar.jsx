import React from "react";
import { NavLink } from "react-router-dom";
import authService from "../services/auth-service";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

//passing props on line 6
const Navbar = ({ isLoggedIn, user, setUser }) => {
  const logoutUser = () => {
    authService.logout().then(() => {
      setUser(null, false);
    });
  };

  return (
    <ul>
      {/* //if user is logged in, want to show user and these list items */}
      {isLoggedIn && user && (
        <>
          <li>{user.firstName}</li>
          <li>
            <NavLink to="/">
              <button onClick={() => logoutUser()}>Logout</button>
            </NavLink>
          </li>
        </>
      )}
      {/* //if user isn't logged in, we show these list items */}
      {!isLoggedIn && (
        <>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
      <IconButton type="submit" color="success">
        <AddShoppingCartIcon to="/cart" />
      </IconButton>
    </ul>
  );
};

export default Navbar;
