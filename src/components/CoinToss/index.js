// Write your code here
import {Component} from 'react'
import './index.css'

const headsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: headsImage,
    headsCount: 0,
    tailsCount: 0,
  }

  tossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImage = ''
    let updatedHeadsCount = headsCount
    let updatedTailsCount = tailsCount
    if (tossResult === 0) {
      tossImage = headsImage
      updatedHeadsCount = headsCount + 1
    } else {
      tossImage = tailsImage
      updatedTailsCount = tailsCount + 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: updatedHeadsCount,
      tailsCount: updatedTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    return (
      <div className="background-section">
        <div className="second-background">
          <h1>Coin Toss Game</h1>
          <p>Heads(or)Tails</p>
          <img src={tossResultImage} className="toss-image" alt="toss-result" />
          <button className="button" type="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total : {headsCount + tailsCount}</p>
            <p className="count">Heads : {headsCount}</p>
            <p className="count">Tails : {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
