import React from 'react';

const SearchBar = () => {
 return (
  <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
   <a class="navbar-brand mb-0 h1">Instagram</a>
   <form class="form-inline">
    <input
     class="form-control mr-sm-2"
     type="search"
     placeholder="Search"
     aria-label="Search"
    />
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
     Search
    </button>
   </form>
  </nav>
 );
};

export default SearchBar;