import React from 'react';

var data = require('../components/Deck.json');

const Cards = () => (
  <div>{
    data.map(card => (
      <div id = {card.id} >{card.rank} : {card.symbol}</div>
    ))
  }
  </div>
)

export default Cards
