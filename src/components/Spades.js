import React from 'react';

var data = require('../components/Deck.json');


const Spades = React.createClass({
render() {
	return (
  <div>{
  	data.map(card => (
       	<div id = {card.id} >
       	    {card.suit == 'spade' && <div className="col-sm-1 thumbnail card"> {card.rank} : {card.symbol} </div>}
       	</div>
    ))
  	}
  </div>
)
}
})

export default Spades;