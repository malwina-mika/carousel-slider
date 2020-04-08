import React from 'react';
import data from '../../data.json'
import './Carousel.scss';
import Box from '../Box/Box';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Carousel extends React.Component {
  state = {
    startIndex: 0,
    cardsAmount: 4,
  };

  handleIncrement = () => {
    if (!this.isLastIndex()) {
      this.setState((prevState) => ({
        startIndex: ++prevState.startIndex
      }));
    }
  }

  handleDecrement = () => {
    if (!this.isFirstIndex()) {
      this.setState((prevState) => ({
        startIndex: --prevState.startIndex
      }));
    }
  }

  isFirstIndex = () => this.state.startIndex === 0;
  isLastIndex = () => this.state.startIndex + 4 >= 6;

  render() {

    const { cardsAmount } = this.state

    return (
      <section className="container">
        <h1> Experiences in Paris</h1>
        <div className="wrapper">
          <div className="carousel-container"
            style={{
              'transform': `translateX(-${this.state.startIndex * (100 / 6)}%)`
            }}>
            {
              data['data'].map((item, i) => {
                const { title, id, img_url: img, rating, body, review, rating_amount: ratingAmount } = item.attributes;
                const isActive = this.state.startIndex <= i && i < this.state.startIndex + cardsAmount;
                return (
                  <Box
                    isActive={isActive}
                    key={id}
                    title={title}
                    img={img}
                    body={body}
                    review={review}
                    rating={rating}
                    ratingAmount={ratingAmount} />

                )
              })
            }

          </div>
          <div className='button-container'>
            <button>
              <FontAwesomeIcon icon={faChevronLeft} onClick={this.handleDecrement} />
            </button>
            <button>
              <FontAwesomeIcon icon={faChevronRight} onClick={this.handleIncrement} />
            </button>
          </div>
        </div>

      </section>
    );
  }
}

export default Carousel;