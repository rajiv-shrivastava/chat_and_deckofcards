import React from 'react';

var data = require('../components/Deck.json');


const AllCards = React.createClass({
render() {
	const {cards} = this.props;
	return (
  <div>
  {
  	cards.map(card => (
       	<div id = {card.id} >
       	    {
       	    

       	        <div className="col-sm-2">
       	           <div className="card">
       	               <div className="text-right"> {card.rank}  {card.symbol} </div>
                           <h1 className="text-center">  {card.rank}  {card.symbol} </h1>
       	           <br /><br />
       	           {card.rank}  {card.symbol}
       	           </div> 
       	           <br />  
       	        </div> 

       	  }
       	</div>
    ))
  	}


  </div>
)
}
})

export default AllCards;
