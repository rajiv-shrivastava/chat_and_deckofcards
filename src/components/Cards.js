import React from 'react';
import Spades from './Spades'
import Diamonds from './Diamonds'
import Clubs from './Clubs'
import Hearts from './Hearts'
import AllCards from './AllCards'
import FaceCards from './FaceCards'

var data = require('../components/Deck.json');

const Cards = React.createClass({
  getInitialState() {
    return{
      cards: data,
      initialCards: data,
      showSpades: false,
      showAllCards: true,
      showDiamonds: false,
      showClubs: false,
      showHearts: false,
      showFaceCards: false
    }
  },

  showSpades() {
    this.setState({
      showSpades: true,
      showAllCards: false,
      showDiamonds: false,
      showClubs: false,
      showHearts: false,
      showFaceCards: false
    })
  },

  showHearts() {
    this.setState({
      showHearts: true,
      showAllCards: false,
      showDiamonds: false,
      showClubs: false,
      showSpades: false,
      showFaceCards: false
    })
  },

  showClubs() {
    this.setState({
      showClubs: true,
      showAllCards: false,
      showDiamonds: false,
      showSpades: false,
      showHearts: false,
      showFaceCards: false
    })
  },

  showDiamonds() {
    this.setState({
      showDiamonds: true,
      showAllCards: false,
      showSpades: false,
      showClubs: false,
      showHearts: false,
      showFaceCards: false
    })
  },

  showFaceCards() {
    this.setState({
      showDiamonds: false,
      showAllCards: false,
      showSpades: false,
      showClubs: false,
      showHearts: false,
      showFaceCards: true
    })
  },

  resetCards() {
    this.setState({
      cards: this.state.initialCards
    })
    console.log('reset cards', this.state );
  },

  shuffleCards() {
    var shuffle = this.state.cards;
    var currentIndex = shuffle.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = shuffle[currentIndex];
    shuffle[currentIndex] = shuffle[randomIndex];
    shuffle[randomIndex] = temporaryValue;
  }

  this.setState({cards: shuffle});

  },

  showAllCards(){
    this.setState({
      showAllCards: true,
      showDiamonds: false,
      showSpades: false,
      showClubs: false,
      showHearts: false,
      showFaceCards: false,

    })

  },

  render () {
  return (
        <div>

         <br />
        <button className="btn btn-primary" onClick={() => this.showAllCards()}>Show AllCards</button>
         <button className="btn btn-primary"  onClick={() => this.shuffleCards()}>Shuffle Cards</button>
         <button className="btn btn-primary"  onClick={() => this.resetCards()}>Reset Cards</button>

        <button className="btn btn-primary" onClick={() => this.showSpades()}>Show Spades</button>
        <button className="btn btn-primary" onClick={() => this.showHearts()}>Show Hearts</button>
        <button className="btn btn-primary"  onClick={() => this.showClubs()}>Show Clubs</button>
        <button className="btn btn-primary"  onClick={() => this.showDiamonds()}>Show Diamonds</button>
        <button className="btn btn-primary" onClick={() => this.showFaceCards()}>Show FaceCards</button>
        <br/> <br/> <br/>
        {this.state.showAllCards && <AllCards cards={this.state.cards}/>}
        {this.state.showHearts && <Hearts/>}
        {this.state.showClubs && <Clubs/>}
        {this.state.showDiamonds && <Diamonds/>}
        {this.state.showFaceCards && <FaceCards/>}
        {this.state.showSpades && <Spades/>}

        </div>
  )
}
})


export default Cards
