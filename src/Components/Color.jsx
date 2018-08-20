import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/colorAction';

const Color = ({ state: { color }, actions: { loadColor } }) => (
  <button
    style={{
      backgroundColor: `#${color}`,
      fontSize: '50px'
    }}
    type="button"
    onClick={loadColor}
  >
    Click Me
  </button>
);

Color.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ state: state.color });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Color);
