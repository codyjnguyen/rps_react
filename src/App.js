import React from 'react';
import './App.css';

const PlayerCard = ()=> {
  const style = {
    background: color,
    backgroundImage: "url(./img/" + symbol + ".png)",
  }
  return(
    <div style = {style} className="player-card">
        {symbol}
    </div>
  )
}

class App extends Component {
  
  constructor(props) {
    super(props)
    this.symbols = ["rock", "paper", scissors, ]
    this.state = { }
  }

  decideWinner = ()=> {
    const {playerBlue, playerRed} = this.state
    if(playerRed == playerBlue) {
      return "It's a draw!"
    }
    if (( playerRed==="rock" && playerBlue==="scissors")||
       ( playerRed==="paper" && playerBlue==="rock")||
       ( playerRed==="scissors" && playerBlue==="paper"))
       return "Red player wins !"
       else
       return "Blue player wins !"
    }
    
  }

  runGame = () => {
    let counter = 0
    let myInterval = setInterval(() => {
      counter++
      this.setState({
        playerRed: this.symbols[Math.floor(Math.random()*3)],
        playerBlue: this.symbols[Math.floor(Math.random()*3)],
        winner: ""
      })
      if(counter > 40) {
        clearInterval(myInterval)
        this.setState({winner: this.decideWinner()})
      }
    },100)
  }

  render() {
    return {
      <div className="App">
        <PlayerCard 
          color="red"
          symbol={this.state.playerRed}  />
        <PlayerCard 
          color="blue"
          symbol={this.state.playerBlue} />
        <p>{this.state.winner}</p> 
        <button onclick={this.runGame}>Run Game</button>
      </div>;
    }
  };
};

export default App;
