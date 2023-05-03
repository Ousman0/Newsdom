import React from "react";
import "../Components/Util.css";
import { Link } from "react-router-dom";
const Nav=()=> {
  
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark gradient-custom py-0">
          <div className="container-fluid">
            <Link className="nav-link" to="/">
              Navbar
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
             
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto d-flex flex-row mb-2 mb-lg-0">
                <li className="nav-item text-center ">
                  <Link className="nav-link"  to="Technology">
                     Home
                  </Link>
                </li>

                <li className="nav-item text-center ">
                  <Link className="nav-link"  to="Business">
                     Business
                  </Link>
                </li>
                <li className="nav-item text-center ">
                  <Link className="nav-link"  to="Entertainment">
                     Entertainment
                  </Link>
                </li>
                <li className="nav-item text-center ">
                  <Link className="nav-link"  to="General">
                     General
                  </Link>
                </li>
                <li className="nav-item text-center ">
                  <Link className="nav-link"  to="Health">
                     health
                  </Link>
                </li>
                <li className="nav-item text-center ">
                  <Link className="nav-link"  to="Science">
                           Science
                  </Link>
                </li>
                <li className="nav-item text-center ">
                  <Link className="nav-link"  to="Sports">
                     Sports
                  </Link>
                </li>
                <li className="nav-item text-center ">
                  <Link className="nav-link"  to="Technology">
                     Technology
                  </Link>
                </li>
              </ul>

              <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
                <li className="nav-item text-center">
                  <Link className="nav-link" to="General">
                    News
                  </Link>
                </li>
              </ul>

              <form className="d-flex input-group w-auto ms-lg-1 my-3" style={{padding:"0"}}>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-white mx-0"
                  type="button"
                  data-mdb-ripple-color="dark"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  
}
export default Nav;