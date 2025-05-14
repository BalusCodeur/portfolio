import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="App-header">
      <h1>Portfolio de Babus</h1>
      <p>Bienvenue sur le portfolio de Babus</p>
      <img src="images/poco.png" alt="Mon Portrait" className="profile-image" />
      <h1>Balus Babus</h1>
    </header>
  );
}
export default Header;
