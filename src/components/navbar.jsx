import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Button } from "antd";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 shadow-md bg-white">
      <div className="max-w-7xl mx-auto px-8  h-16 flex items-center justify-between">
        <img src={logo} alt="logo" className="h-12 w-auto" />
        <div className="flex items-center gap-6">
          <Link to="/">
            <Button type="default" className="text-lg font-semibold">Home</Button>
          </Link>
          <Link to="/courses">
            <Button type="default" className="text-lg font-semibold">Courses</Button>
          </Link>
          <Link to="/login">
            <Button type="primary" className="text-lg font-semibold">login</Button>
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
