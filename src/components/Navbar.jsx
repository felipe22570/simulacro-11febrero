import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Nav = styled.nav`
   background-color: hsl(195, 67%, 30%);
   width: 100%;
   height: 70px;
   position: relative;
   top: 0;
   left: 0;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const Navbar = () => {
   return (
      <Nav>
         <Link to="/" className="nav-link">
            Home
         </Link>
         <Link to="/datos" className="nav-link">
            Playlist
         </Link>
      </Nav>
   );
};

export default Navbar;
