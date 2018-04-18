import React from 'react'

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
        board: ['', '', '', '', '', '', '', '', ''],
        activePlayer: '',
        firstPlayerCount: 0,
        secondPlayerCount: 0,
    }
    this.checkPlayer = this.checkPlayer.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  render () {
    return (
      <div className='board'>
        <div className='row'>
          <div className='top-left box' onClick={this.handleClick(0)}>{this.state.board[0]}</div>
          <div className='top-middle box' onClick={this.handleClick(1)}>{this.state.board[1]}</div>
          <div className='top-right box' onClick={this.handleClick(2)}>{this.state.board[2]}</div>
        </div>

        <div className='row'>
          <div className='middle-left box' onClick={this.handleClick(3)}>{this.state.board[3]}</div>
          <div className='middle box' onClick={this.handleClick(4)}>{this.state.board[4]}</div>
          <div className='middle-right box' onClick={this.handleClick(5)}>{this.state.board[5]}</div>
        </div>

        <div className='row'>
          <div className='bottom-left box' onClick={this.handleClick(6)}>{this.state.board[6]}</div>
          <div className='bottm-middle box' onClick={this.handleClick(7)}>{this.state.board[7]}</div>
          <div className='bottom-right box' onClick={this.handleClick(8)}>{this.state.board[8]}</div>
        </div>
      </div>
    )
  }

  checkPlayer () {
   (this.state.firstPlayerCount <= 0) ?
      this.setState({
        firstPlayerCount: 1,
        secondPlayerCount: 0,
        activePlayer: 'X'
      })
      :
    (this.state.secondPlayerCount <= 0) 
      this.setState({
        firstPlayerCount: 0,
        secondPlayerCount: 1,
        activePlayer: '0',
      })
    }
    
  handleClick (num) {
    this.checkPlayer() 
    this.state.board.splice(num, 1, this.state.activePlayer)
  }
  
}

export default App
