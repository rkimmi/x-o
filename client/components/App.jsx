import React from 'react'

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
        board: [ '', '', '', '', '', '', '', '', '' ],
        activePlayer: '',
        playerOneTurn: true,
        playerTwoTurn: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (loc) {
    if (this.state.playerOneTurn) {
      this.setState({
      playerOneTurn: false,
      playerTwoTurn: true,
      activePlayer: '0'
    })
  }
  if (this.state.playerTwoTurn) {
    this.setState({
      playerOneTurn: true,
      playerTwoTurn: false,
      activePlayer: 'X'
    })
  }
  this.state.board.splice(loc, 1, this.state.activePlayer)
}

  render () {
    return (
      <div className='board'>
        <div className='row'>
          <div className='top-left box' onClick={() => this.handleClick(0)}>{this.state.board[0]}</div>
          <div className='top-middle box' onClick={() => this.handleClick(1)}>{this.state.board[1]}</div>
          <div className='top-right box' onClick={() => this.handleClick(2)}>{this.state.board[2]}</div>
        </div>

        <div className='row'>
          <div className='middle-left box' onClick={() => this.handleClick(3)}>{this.state.board[3]}</div>
          <div className='middle box' onClick={() => this.handleClick(4)}>{this.state.board[4]}</div>
          <div className='middle-right box' onClick={() => this.handleClick(5)}>{this.state.board[5]}</div>
        </div>

        <div className='row'>
          <div className='bottom-left box' onClick={() => this.handleClick(6)}>{this.state.board[6]}</div>
          <div className='bottm-middle box' onClick={() => this.handleClick(7)}>{this.state.board[7]}</div>
          <div className='bottom-right box' onClick={() => this.handleClick(8)}>{this.state.board[8]}</div>
        </div>
      </div>
    )
  }
}

export default App
