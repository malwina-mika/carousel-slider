import React from 'react';
import Stars from '../Stars/Stars'
import './Box.scss'

const Box = ({ id, title, body, rating, img, ratingAmount, review, isActive
}) => (
    <div className={`Box-container ${isActive ? '--active' : ''}`}>
      <img src={img} alt={title} />
      <p>{body}</p>
      <h4>{title}</h4>
      <Stars rating={rating} ratingAmount={ratingAmount} review={review} />

    </div>
  )

export default Box;