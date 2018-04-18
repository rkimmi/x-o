import React from 'react'

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
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
    return (
      <div className='board'>
        <div className='row'>
          <div className='top-left box' onClick={this.handleClick}></div>
          <div className='top-middle box'></div>
          <div className='top-right box'></div>
        </div>

        <div className='row'>
          <div className='middle-left box'> </div>
          <div className='middle box'> </div>
          <div className='middle-right box'> </div>
        </div>

        <div className='row'>
          <div className='bottom-left box'></div>
          <div className='bottm-middle box'></div>
          <div className='bottom-right box'></div>
        </div>
      </div>
    )
  }
}

export default App
