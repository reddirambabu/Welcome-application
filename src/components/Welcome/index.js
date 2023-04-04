// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isLogged: false}

  onButtonChange = () => {
    this.setState(previous => ({isLogged: !previous.isLogged}))
  }

  render() {
    const {isLogged} = this.state
    const buttonText = isLogged ? 'Subscribed' : 'Subscribe'

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Welcome</h1>
          <p className="paragraph">Thank you! Happy Learning</p>
          <button
            type="button"
            className="button"
            onClick={this.onButtonChange}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
