import React from 'react'

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
        board: ['', '', '', '', '', '', '', '', ''],
        firstPlayer: 'X',
        secondPlayer: '0',
        firstPlayerCount: 0,
        secondPlayerCount: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
   if (this.state.firstPlayerCount <= 0) {
    this.setState({
      firstPlayerCount: 1,
      secondPlayerCount: 0,
    })
  if (this.state.secondPlayerCount <= 0) {
    this.setState({
      firstPlayerCount: 0,
      secondPlayerCount: 1,
    })
  }
  }
}

  render () {
    let row1 = this.state.board.slice(0, 3)
    let row2 = this.state.board.slice(3, 6)
    let row3 = this.state.board.slice(6, 9)
    return (
      <div className='board'>
        <div className='row'>{row1}</div>
          <div className='top-left box' onClick={this.handleClick}>{this.state.board[0]}</div>
          <div className='top-middle box'>{this.state.board[1]}</div>
          <div className='top-right box'>{this.state.board[2]}</div>

        <div className='row'>
          <div className='middle-left box'>{this.state.board[3]}</div>
          <div className='middle box'>{this.state.board[4]}</div>
          <div className='middle-right box'>{this.state.board[5]}</div>
        </div>

        <div className='row'>
          <div className='bottom-left box'>{this.state.board[6]}</div>
          <div className='bottm-middle box'>{this.state.board[7]}</div>
          <div className='bottom-right box'>{this.state.board[8]}</div>
        </div>
      </div>
    )
  }
}

export default App
