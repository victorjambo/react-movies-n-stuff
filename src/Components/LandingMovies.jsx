import React, { Fragment } from 'react';
import Banner from './Movies/Banner';
import TopMovies from './Movies/TopMovies';
import TopShows from './Movies/TopShows';
import Newsletter from './Movies/Newsletter';

class LandingMovies extends React.Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <TopMovies />
        <TopShows />
        <Newsletter />
      </Fragment>
    );
  }
}

export default LandingMovies;
