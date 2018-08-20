import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actionCreators from '../../actions/movieAction';
import ViewMoreHeader from '../../Container/ViewMoreHeader';
import MovieItem from '../../Container/MovieItem';

class TopShows extends React.Component {
  componentWillMount() {
    const { actions: { fetchShows } } = this.props;
    fetchShows();
  }

  render() {
    const { state: { shows } } = this.props;
    return (
      <section id="top_shows" className="clearfix">
        <div className="wrapper">
          <ViewMoreHeader label="Shows" />
          {
            shows.map(movie => <MovieItem movie={movie} key={movie.id} />)
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

TopShows.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TopShows);
