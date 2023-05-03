import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import "./server.css"
import logo from "./revsLogo.png"
import LogoutButton from "./logoutButton"

function NavBar({ server, view }) {
  return (
    <>
      <Navbar className="nav">
        <Container>
          <Navbar.Brand>
            <img className="nav-logo" src={logo} />
          </Navbar.Brand>
          <button class="nav-button" onClick={() => view(0)} >Sales</button>
          <button class="nav-button" onClick={() => view(1)} >X Reoprt</button>
          <button class="nav-button" onClick={() => view(2)} >Z Reoprt</button>
          <button class="nav-button" onClick={() => view(3)} >Excess</button>
          <button class="nav-button" onClick={() => view(4)} >Restock</button>
          <button class="nav-button" onClick={() => view(5)} >Inventory</button>
          <button class="nav-button" onClick={() => view(6)} >Menu</button>
          <button class="nav-button" onClick={() => server()} >POS</button>
          <LogoutButton class="nav-button" />
        </Container>
      </Navbar>
    </>
  );

}

export default NavBar;