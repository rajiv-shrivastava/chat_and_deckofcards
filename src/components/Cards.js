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
      showSpades: false,
      showAllCards: true,
      showDiamonds: false,
      showClubs: false,
      showHearts: false,
      showFaceCards: false,
      showAllCards: true
    }
  },

  showSpades() {
    this.setState({
      showSpades: true,
      showAllCards: false,
      showDiamonds: false,
      showClubs: false,
      showHearts: false,
      showFaceCards: false,
      showAllCards: false
    })
  },

  showHearts() {
    this.setState({
      showHearts: true,
      showAllCards: false,
      showDiamonds: false,
      showClubs: false,
      showSpades: false,
      showFaceCards: false,
      showAllCards: false
    })
  },

  showClubs() {
    this.setState({
      showClubs: true,
      showAllCards: false,
      showDiamonds: false,
      showSpades: false,
      showHearts: false,
      showFaceCards: false,
      showAllCards: false
    })
  },

  showDiamonds() {
    this.setState({
      showDiamonds: true,
      showAllCards: false,
      showSpades: false,
      showClubs: false,
      showHearts: false,
      showFaceCards: false,
      showAllCards: false
    })
  },

  showFaceCards() {
    this.setState({
      showDiamonds: false,
      showAllCards: false,
      showSpades: false,
      showClubs: false,
      showHearts: false,
      showFaceCards: true,
      showAllCards: false
    })
  },

  showAllCards(){
    this.setState({
      showAllCards: true,
      showDiamonds: false,
      showAllCards: false,
      showSpades: false,
      showClubs: false,
      showHearts: false,
      showFaceCards: false,
      showAllCards: true

    })

  },

  render () {
  return (
        <div>

         <br />
        {this.state.showAllCards && <AllCards/>}
        <button onClick={() => this.showAllCards()}>Show AllCards</button>


        <button onClick={() => this.showSpades()}>Show Spades</button>
        {this.state.showSpades && <Spades/>}
        <button onClick={() => this.showHearts()}>Show Hearts</button>
        {this.state.showHearts && <Hearts/>}
        <button onClick={() => this.showClubs()}>Show Clubs</button>
        {this.state.showClubs && <Clubs/>}
        <button onClick={() => this.showDiamonds()}>Show Diamonds</button>
        {this.state.showDiamonds && <Diamonds/>}
        <button onClick={() => this.showFaceCards()}>Show FaceCards</button>
        {this.state.showFaceCards && <FaceCards/>}
        <br/>
        </div>
  )
}
})


export default Cards