import React from 'react'

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
        playerOutput: '',
        firstPlayerCount: 0,
        secondPlayerCount: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
   if (this.state.firstPlayerCount === 0) {
    this.setState({
      playerOutput: 'X',
      firstPlayerCount: 1,
      secondPlayerCount: 0
    })
  if (this.state.secondPlayerCount === 0) {
    this.setState({
      playerOutput: '0',
      firstPlayerCount: 0,
      secondPlayerCount: 1
    })
  }
  }
}

  render () {
    return (
      <div className='board'>
            <h1>{this.state.firstPlayer}</h1>
        <div className='row'>
          <div className='top-left spot' onClick={this.handleClick}>{this.state.playerOutput}</div>
          <div className='top-middle spot'></div>
          <div className='top-right spot'></div>
        </div>

        <div className='row'>
          <div className='middle-left spot'> </div>
          <div className='middle spot'> </div>
          <div className='middle-right spot'> </div>
        </div>

        <div className='row'>
          <div className='bottom-left spot'></div>
          <div className='bottm-middle spot'></div>
          <div className='bottom-right spot'></div>
        </div>
      </div>
    )
  }
}

export default App
