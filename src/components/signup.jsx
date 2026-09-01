import {Button} from "antd"
import {Link} from "react-router-dom"
function Signup() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-100">
      <div className="bg-blue w-80 h-50 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-5">Signup</h2>
        <input type="text" placeholder="User Name" className="w-full border p-2 rounded mb-4" />
        <input type="text" placeholder="Email" className="w-full border p-2 rounded mb-4" />
        <input type="password" placeholder="password" className="w-full border p-2 rounded mb-4" />
        <Button type="primary" className="px-4  w-full text-lg"><Link to="/">Signup</Link></Button>
        <p className="text-center mt-3">Already Account? <Link className="text-blue-600 hover:text-blue-900 hover:underline " to="/login">Login</Link></p>
      </div>
    </div>
  )
}

export default Signup