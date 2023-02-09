// import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import About from './About';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {BrowserRouter as Router, Route} from "react-router-dom"
import { Routes} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');// wheter the dark mode is enabled or not. 
  const[alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }
  const toogleMode = ()=>
  {
    if(mode ==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark Mode is On", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light Mode is On", "success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toogleMode={toogleMode} />
    <Alert alert={alert} style={{height: '50px'}}/>
    <div className="container my-3">
    <Routes>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/about" element={ <About mode={mode} />}>
          </Route>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
          </Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
