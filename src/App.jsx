import { Routes, Route, Link } from "react-router-dom";
import {DigitalClock} from "./components/DigitalClock";
import {BMICalculatorApp} from "./components/BMICalculatorApp";
import CurrencyConvertor from "./components/CurrencyConvertor";


function App() {
  return (
    <>
<div className="app">
      <h1>React Mini Projects</h1>

      <div className="card">
        <p>Select a project from navigation</p>
      </div>
    </div>
      <nav className="navbar" style={{ padding: "10px" }}>
 <ul className="nav-links">
        <li><Link to="/clock">DigitalClock</Link> |{" "}</li>
        <li><Link to="/bmi">BMICalculator</Link> |{" "}</li>
        <li><Link to="/currencyconverter">CurrencyConverter</Link></li>
</ul>
      </nav>

      <Routes>
        <Route path="/clock" element={<DigitalClock />} />
        <Route path="/bmi" element={<BMICalculatorApp />} />
        <Route path="/currencyconverter" element={<CurrencyConvertor />} />
      </Routes>
    </>
  );
}

export default App;
