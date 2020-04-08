import React from 'react';
import Stars from '../Stars/Stars'
import './Box.scss'

const Box = ({ title, category, rating, img, ratingAmount, review, isActive
}) => (
    <div className={`Box-container ${isActive ? '--active' : ''}`}>
      <img src={img} alt={title} />
      <p>{category}</p>
      <h3>{title}</h3>
      <a className='link' href="#/">Read more</a>
      <Stars rating={rating} ratingAmount={ratingAmount} review={review} />
    </div>
  )

export default Box;