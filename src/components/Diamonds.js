import React from 'react';

var data = require('../components/Deck.json');


const Diamonds = React.createClass({
render() {
	return (
  <div>{
  	data.map(card => (
       	<div id = {card.id} >
       	    {card.suit == 'diamond' && <div className="col-sm-1 thumbnail card"> {card.rank} : {card.symbol} </div>}
       	</div>
    ))
  	}
  </div>
)
}
})

export default Diamonds;