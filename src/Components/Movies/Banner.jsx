import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/movieAction';

class Banner extends React.Component {
  componentWillMount() {
    const { actions: { fetchGrossing } } = this.props;
    fetchGrossing();
  }

  render() {
    const { state: { grossing } } = this.props;
    return (
      <section id="banner" className="clearfix" style={{}}>
        <div id="banner_content_wrapper">
          <div id="poster">
            <img src={grossing.image} alt={grossing.title} className="featured_image" />
            <img src="images/play_button.png" alt="Play Trailer" className="play_button" />
          </div>
          <div id="content">
            <h2 className="title">{grossing.title}</h2>
            <div className="ratings">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star inactive" />
            </div>

            <p className="description">{grossing.desc}</p>

            <p className="info">
              {grossing.rating}&nbsp;
              <span>|</span>&nbsp;
              {grossing.time}&nbsp;
              <span>|</span>&nbsp;
              {grossing.genre}&nbsp;
              <span>|</span>&nbsp;
              {grossing.release}
            </p>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({ state: state.movies });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

Banner.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
