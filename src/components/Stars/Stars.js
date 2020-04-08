import React from 'react'
import './Stars.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

class Stars extends React.Component {
  state = {
    starsConfig: [
      {
        id: 1,
        active: false,
      },
      {
        id: 2,
        active: false,
      },
      {
        id: 3,
        active: false,
      },
      {
        id: 4,
        active: false,
      },
      {
        id: 5,
        active: false,
      },
    ],
    reviewState: false,
  };

  review(rating) {
    this.setState(({ starsConfig }) => {
      return starsConfig.map(i => {
        if (i.id <= rating) {
          i.active = 'active';
        } else {
          i.active = 'inactive';
        }
        return i;
      });
    });
  }

  giveReview(star) {
    this.setState({ reviewState: star });
  }

  mouseOutOfStars() {
    this.setState(({ starsConfig }) => {
      return starsConfig.map(i => {
        i.active = false;
        return i;
      });
    });
  }

  render() {
    const { rating, ratingAmount } = this.props;
    const { starsConfig, reviewState } = this.state;

    return (
      <div onMouseOut={() => this.mouseOutOfStars()}>
        {starsConfig.map(i => (
          <FontAwesomeIcon
            key={i.id}
            onClick={() => this.giveReview(i.id)}
            onMouseOver={() => this.review(i.id)}
            icon={
              (i.active
                ? i.active === 'active'
                : i.id <= (reviewState || rating))
                ? faStar
                : farStar
            }
            className={
              (i.active
                ? i.active === 'active'
                : i.id <= (reviewState || rating))
                ? 'active'
                : ''
            }
          />
        ))}
        <span>{ratingAmount}</span>
      </div>
    );
  }
}


export default Stars;