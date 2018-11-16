import React, { Component } from 'react';
import Card from './Card';
import PropTypes from "prop-types";

const Cards = props => {
  console.log('props from cards = ', props)
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map(e => 
          <Card 
            card={e}
          />
            )}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(
      PropTypes.shape({ author: PropTypes.string, headline: PropTypes.string, img: PropTypes.string})
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;