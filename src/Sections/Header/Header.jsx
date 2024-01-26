import React from "react";
import "./Header.sass";

// COMPONENTS
import NavBar from '../../Components/NavBar/NavBar.jsx'
import Hero from "../../Components/Hero/Hero.jsx";
function Header() {
  return (
    <div>
      <NavBar />
      <Hero/>
    </div>
  );
}

export default Header;
