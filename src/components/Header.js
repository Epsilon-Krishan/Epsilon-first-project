import React from 'react';
import brand from '../Assets/Group5.png';
import toggleButton from '../Assets/Group4.png';
import searchbtn from '../Assets/Group3.png';
import logoutbtn from '../Assets/group2.png';

const Header = () => {
    return (
        <header >
        <nav className="navbar navbar-expand d-flex justify-content-around">
          <div className="container">
            <div>
            <a className="p-6"href="#"><img src={toggleButton} /></a>
            <a className="navbar-brand" href="#"><img src={brand} /></a>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item text-center align-middle mr-4">
                <a href="#"><img src={searchbtn} /></a>
                <p className="text-white">Search</p>
              </li>
              <li className="nav-item text-center align-middle">
                <a href="#"><img src={logoutbtn} /></a>
                <p className="text-white">Log Out</p>
              </li>
            </ul>

          </div>
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          {/* </div> */}
        </nav>
      </header>
    )
}

export default Header
