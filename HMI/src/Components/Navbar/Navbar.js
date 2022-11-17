/* eslint-disable no-unused-vars */
import { Navbar as BootstrapNavbar } from 'bootstrap';
import { isAuthenticated,getAuthenticatedUser } from "../../utils/auths";

const header=document.querySelector("header")


function navbar( ){

  const user=getAuthenticatedUser();

  const navbarNotLog=`
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#" data-uri ="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" data-uri ="/viewMovie">viewMovie</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" data-uri ="/login">login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" data-uri ="/register">register</a>
          </li>
        </ul>
      </div>
    </nav>`

    const navbarAuthentified=`
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#" data-uri ="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" data-uri ="/viewMovie">viewMovie</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" data-uri ="/addMovie">addMovie</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#" data-uri ="/logout">logout</a>
        </li>
        
        </ul>
      </div>
    </nav>`

    const navbarRender=document.querySelector("#navbarWrapper");
    navbarRender.innerHTML= isAuthenticated() ? navbarAuthentified : navbarNotLog ;

    
    

}


export default navbar;