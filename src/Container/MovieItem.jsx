import React from 'react';
import PropTypes from 'prop-types';

const MovieItem = ({
  movie: {
    title, rating, time, image
  }
}) => (
  <div className="row">
    <div className="post">
      <img src={image} alt={title} />
      <h3 className="title">{title}</h3>
      <p className="post_info">{rating} <span>|</span> {time}</p>
    </div>
  </div>
);

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieItem;
