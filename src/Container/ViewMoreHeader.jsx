import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ViewMoreHeader = ({ label }) => (
  <header className="clearfix">
    <h2>Popular {label}</h2>
    <p className="view_more">
      <Link to={`/${label}`}>View All {label}</Link>
    </p>
  </header>
);

ViewMoreHeader.propTypes = {
  label: PropTypes.string.isRequired
};

export default ViewMoreHeader;
