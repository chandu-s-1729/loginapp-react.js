// Write your code here
import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {
    isLogin: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state

    return (
      <div className="bg-container">
        <div className="home-container">
          <Message isLogin={isLogin} />
          {isLogin ? (
            <Login login={this.onClickButton} />
          ) : (
            <Logout logout={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
