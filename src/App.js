import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert((null))
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
    }
    else {
      setMode("dark")
      document.body.style.backgroundColor = "#060326"
      showAlert("Dark mode has been enabled", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextInfo" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route exact path="/about" element={<About />} />

            <Route exact path="/" element={<TextForm heading={"Enter text to get information"} mode={mode} showAlert={showAlert} />} />



          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
