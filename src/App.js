import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Color from './Components/Color';
import store from './store';
import LandingMovies from './Components/LandingMovies';
import Header from './Container/Header';
import Footer from './Container/Footer';
import Movies from './Components/Movies';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <Switch>
            <Route path="/" exact component={LandingMovies} />
            <Route path="/movies" exact component={Movies} />
            <Route path="/colors" exact component={Color} />
          </Switch>
          <Footer />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
