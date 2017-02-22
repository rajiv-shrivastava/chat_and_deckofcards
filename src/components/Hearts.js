import React from 'react';

var data = require('../components/Deck.json');


const Hearts = React.createClass({
render() {
	return (
  <div>{
  	data.map(card => (
       	<div id = {card.id} >
       	    {card.suit == 'heart' && <div className="col-sm-1 thumbnail card"> {card.rank} : {card.symbol} </div>}
       	</div>
    ))
  	}
  </div>
)
}
})

export default Hearts;