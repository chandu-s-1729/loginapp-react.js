// Write your code here
import './index.css'

const Login = props => {
  const {login} = props
  return (
    <div className="container">
      <button onClick={login} className="login-btn" type="button">
        Login
      </button>
    </div>
  )
}

export default Login
