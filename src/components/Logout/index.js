// Write your code here
import './index.css'

const Logout = props => {
  const {logout} = props
  return (
    <div className="container">
      <button onClick={logout} className="login-btn" type="button">
        Logout
      </button>
    </div>
  )
}

export default Logout
