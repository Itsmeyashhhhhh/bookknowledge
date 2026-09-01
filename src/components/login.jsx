import {Button} from "antd"
import {Link} from "react-router-dom"
function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-100">
      <div className="bg-white w-80 h-50 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-5">Login</h2>
        <input type="text" placeholder="Email" className="w-full border p-2 rounded mb-4"/>
        <input type="password" placeholder="password"className="w-full border p-2 rounded mb-4"/>
        <Button type="primary" className="px-4  w-full text-lg"><Link to="/">Login</Link></Button>
        <p className="text-center mt-3">New Account? <Link className="text-blue-600 hover:text-blue-900 hover:underline " to="/signup">Signup</Link></p>
      </div>
    </div>
  )
}

export default Login