import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/movieAction';
import ViewMoreHeader from '../../Container/ViewMoreHeader';
import MovieItem from '../../Container/MovieItem';

class TopMovies extends React.Component {
  componentWillMount() {
    const { actions: { fetchMovies } } = this.props;
    fetchMovies();
  }

  render() {
    const { state: { movies } } = this.props;
    return (
      <section id="top_movies" className="clearfix">
        <div className="wrapper">
          <ViewMoreHeader label="Movies" />
          {
            movies.map(movie => <MovieItem movie={movie} key={movie.id} />)
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

TopMovies.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TopMovies);
