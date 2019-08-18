import React from 'react';
import './navbar.scss';

const Navbar = () => (
     <nav className="navbar navbar-expand-lg navbar-dark bg-main p-3">
        <a className="navbar-brand mr-5" href="#">   
          <i className="fas fa-home mr-1"></i>
          TheBestHotels
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarToggler" aria-controls="navbarToggler" 
                aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link px-4" href="#">
                Головна
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-4" href="#">
                Link
              </a>
            </li>
          </ul>
          <button className="btn button-light my-2 my-sm-0 mr-2" type="submit">
            Зареєструватися
          </button>
          <button className="btn button-light my-2 my-sm-0" type="submit">
            Увійти в акаунт
          </button>
        </div>
      </nav>  
)

export default Navbar;