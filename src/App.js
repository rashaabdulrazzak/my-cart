import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
