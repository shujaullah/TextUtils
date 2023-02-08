// import logo from './logo.svg';
import { useState } from 'react';
import About from './About';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

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
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toogleMode= {toogleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
     <Textform heading = "Enter the Text to Analyze" mode={mode}/> 
      {/* <About/> */}
    </div>
    
    </>
  );
}

export default App;
