// Write your code here
import './index.css'

const Message = props => {
  const {isLogin} = props
  return (
    <div>
      <h1 className="message">{isLogin ? 'Please Login' : 'Welcome User'}</h1>
    </div>
  )
}

export default Message
