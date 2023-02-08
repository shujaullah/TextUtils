import React, {useState} from "react";

export default function Textform(props) {
    const upperCase = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const lowerCase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const [text, setText] = useState('Enter Text here');
    console.log(text);
  return (
    <>
      <div className="container">
      <h1 style = {{color: props.mode==='light'? 'black' : 'white'}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor:props.mode==='light'? 'white' : 'grey'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={upperCase}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-3" onClick={lowerCase}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>

       
      </div>
      <div className="container my-2">
      <h3 style = {{color: props.mode==='light'? 'black' : 'white'}}>Your Text Summary </h3>
      <p style= {{color: props.mode==='light'? 'black' : 'white'}}>{text.split(" ").length} words and  {text.length} characters</p>
      <p style = {{color: props.mode==='light'? 'black' : 'white'}}>{0.008 * text.split(" ").length} Minutes to read</p>
      <h3 style = {{color: props.mode==='light'? 'black' : 'white'}}>Preview Text</h3>
      <p style = {{color: props.mode==='light'? 'black' : 'white'}}>{text}</p>
      </div>
    </>
  );
}
