import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/index";
import { Shop, Item } from "./Components/Shop/index";
import { Navbar, Footer } from "./Components/Common/index";

function App() {
  return (
    <Router>
      <div className="base-div">
        <div className="global-div">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/item/*" element={<Item />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
