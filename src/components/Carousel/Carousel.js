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

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const width = window.innerWidth;

    let amount = 4;
    if (width <= 550) {
      amount = 1;
    }
    if (width > 550 && width <= 768) {
      amount = 2;
    }
    if (width > 769 && width <= 1024) {
      amount = 3;
    }
    if (width > 1025) {
      amount = 4;
    }
    this.setState({ cardsAmount: amount });
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
  isLastIndex = () => this.state.startIndex + this.state.cardsAmount >= data['data'].length;

  render() {

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
                const { title, id, img_url: img, rating, category, review, rating_amount: ratingAmount } = item.attributes;
                const isActive = this.state.startIndex <= i && i < this.state.startIndex + this.state.cardsAmount;
                return (
                  <Box
                    isActive={isActive}
                    key={id}
                    title={title}
                    img={img}
                    category={category}
                    review={review}
                    rating={rating}
                    ratingAmount={ratingAmount} />

                )
              })
            }

          </div>
          <div className='button-container'>
            <button className={(this.isFirstIndex()) ? '--hidden' : ''}>
              <FontAwesomeIcon icon={faChevronLeft}
                onClick={this.handleDecrement} />
            </button>
            <button className={(this.isLastIndex()) ? '--hidden' : ''}>
              <FontAwesomeIcon icon={faChevronRight}
                onClick={this.handleIncrement} />
            </button>
          </div>
        </div>

      </section>
    );
  }
}

export default Carousel;