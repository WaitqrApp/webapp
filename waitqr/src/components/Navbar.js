import React , {useState, useContext}from 'react';

import Logo from './img/logo_waiter-01 copy.png';


function Navbar() {   
    return(
<nav class="navbar navbar-expand-lg navbar-light bg-white">
  <img class="waitqr-logo" src={Logo}/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
      <li>
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      </li>
      <li>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

      </li>
      
      
      
    </ul>
    <form class="form-inline my-2 my-lg-0">
      
    <span class="material-icons">
    notifications
      </span>
      <span>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Dropdown button
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