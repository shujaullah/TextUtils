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
        document.getSelection().removeAllRanges();

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
          <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor:props.mode==='dark'?'#13466e':'white' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={upperCase} disabled={text.length===0} >Convert to Upper Case</button>
        <button className="btn btn-primary mx-1  my-1" onClick={lowerCase } disabled={text.length===0} >Convert to Lower Case</button>
        <button className="btn btn-primary mx-1  my-1" onClick={handleCopy} disabled={text.length===0} >Copy Text</button>
        <button className="btn btn-primary mx-1  my-1" onClick={handleExtraSpaces} disabled={text.length===0} >Remove extra spaces</button>

       
      </div>
      <div className="container my-2">
      <h3 style = {{color: props.mode==='light'? 'black' : 'white'}}>Your Text Summary </h3>
      <p style= {{color: props.mode==='light'? 'black' : 'white'}}>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and  {text.length} characters</p>
      <p style = {{color: props.mode==='light'? 'black' : 'white'}}>{0.008 * text.split(/\s+/).length} Minutes to read</p>
      <h3 style = {{color: props.mode==='light'? 'black' : 'white'}}>Preview Text</h3>
      <p style = {{color: props.mode==='light'? 'black' : 'white'}}>{text}</p>
      </div>
    </>
  );
}
