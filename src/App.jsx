import Home from "./components/home";
import Login from "./components/login";
import Course from "./components/course";
import Signup from "./components/signup";
import Bonus from "./components/bonus";
import Now from "./components/now";
import Event from "./components/event";
import Form from "./components/form";
import { Route, Routes } from "react-router-dom";
function App() {
  const user = true;

  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </>
      ) : (
        <>

        </>
      )}
    </Routes>
  );
}

export default App;
