import React , {useState, useContext}from 'react';

import Logo from './img/logo_waiter-01 copy.png';


function Navbar() {   
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
  <img className="waitqr-logo" src={Logo}/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      
      <li>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      </li>
      <li>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

      </li>
      
      
      
    </ul>
    <form className="form-inline my-2 my-lg-0">
      
    <span className="material-icons">
    notifications
      </span>
      <span>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Jane Doe
          </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Sign in</a>
              <a class="dropdown-item" href="#">Signt out</a>
            </div>
        </div>
      </span>
    </form>
  </div>
</nav>
    );
}

export default Navbar;