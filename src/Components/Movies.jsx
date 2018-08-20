import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/movieAction';

class Movies extends React.Component {
  componentWillMount() {
    const { actions: { fetchAllMovies } } = this.props;
    fetchAllMovies();
  }

  render() {
    const { state: { allMovies } } = this.props;
    return (
      <section id="top_movies" className="clearfix">
        <div className="wrapper">
          {
            allMovies.map(movie => (
              <div className="row" key={movie.id}>
                <div className="post smash">
                  <img src={movie.medium_cover_image} alt={movie.title} />
                </div>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({ state: state.movies });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

Movies.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
