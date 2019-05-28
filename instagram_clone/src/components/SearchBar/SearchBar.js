import React from 'react';
import './SearchBar.css';
import fuzzy from 'fuzzy';

const SearchBar = () => {
 console.log('fzzy ', fuzzy);
 return (
  <nav className="navbar navbar-light bg-light justify-content-around">
   <div className="social socialIcon  d-flex">
    <i className="fab fa-instagram" />|<b className="navbarBrand">Instagram</b>
   </div>
   <form className="form-inline">
    <input
     className="form-control mr-sm-2"
     type="search"
     placeholder="Search"
     aria-label="Search"
    />
   </form>
   <div className="social d-flex">
    <div className="socialIcon">
     <i className="far fa-compass" />
    </div>
    <div className="socialIcon">
     <i className="far fa-heart" />
    </div>
    <div className="socialIcon">
     <i className="far fa-user-circle" />
    </div>
   </div>
  </nav>
 );
};

export default SearchBar;
