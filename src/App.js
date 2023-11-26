import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { ToastContainer } from "react-toastify";
// import "react-toastify/scss/animations";
import "react-toastify/dist/ReactToastify.min.css";
function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <NavBar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/not-found" element={<NotFound />} />
          {/* not existing route redirect to not found */}
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
