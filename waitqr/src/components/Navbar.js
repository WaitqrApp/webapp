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
        
      <select className="btn-secondary" name="userdropdown" id="userdropdown">
        <option value="">User</option>
        <option value="Enero">Sign In</option>
        <option value="Febrero">Sign Out</option>
      </select>
      </span>
    </form>
  </div>
</nav>
    );
}

export default Navbar;