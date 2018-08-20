import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header id="top_header" className="clearfix">
    <div className="wrapper">
      <h1 className="logo">
        <Link to="/">
          Movies
          <span>&amp;</span>
          Stuff
        </Link>
      </h1>
      <nav id="main_nav">
        <a href="#top_movies">Movies</a>
        <a href="#top_shows">TV Shows</a>
        <a href="/">Celebs &amp; Photos</a>
        <a href="#newsletter">News</a>
      </nav>
    </div>
  </header>
);

export default Header;
