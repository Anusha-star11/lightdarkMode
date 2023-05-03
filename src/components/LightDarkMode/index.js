// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isButtonClick: false}

  onButtonClick = () => {
    this.setState(prevState => ({isButtonClick: !prevState.isButtonClick}))
  }

  getButtonText = () => {
    const {isButtonClick} = this.state

    return isButtonClick ? 'Dark Mode' : 'Light Mode'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="lightdarkmode">
        <div className="innerBlock">
          <h1 className="heading">Click To Change Mode</h1>
          <button onClick={this.onButtonClick}>{buttonText}</button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
