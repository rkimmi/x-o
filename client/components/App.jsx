import React from 'react'

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
        playerOutput: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {

  }

  render () {
    return (
      <div className='board'>
        <div className='row'>
          <div className='top-left spot'>o</div>
          <div className='top-middle spot'>o</div>
          <div className='top-right spot'>o</div>
        </div>

        <div className='row'>
          <div className='middle-left spot' onClick={this.handleClick}>{this.state.playerOutput}</div>
          <div className='middle spot'>o</div>
          <div className='middle-right spot'>o</div>
        </div>

        <div className='row'>
          <div className='bottom-left spot'>o</div>
          <div className='bottm-middle spot'>o</div>
          <div className='bottom-right spot'>o</div>
        </div>
      </div>
    )
  }
}

export default App
