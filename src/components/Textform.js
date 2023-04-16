import React,{useState} from "react";

export default function Textform(props) {
    const handleUpClick=()=>{
       
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick=()=>{
       
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClearText=()=>{
        setText("");
    }
    const handleCopyText=()=>{
      navigator.clipboard.writeText(text);
      
  }
  const handleSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    
}
    const handleOnChange=(event)=>{
        
        setText(event.target.value);
    }
    
    const[text,setText]=useState("");
  return (
    <>        
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <div className="form-group">
            <h1>{props.heading}</h1>
         
          <textarea
            className="form-control" value={text} id="myBox"rows="8" style={{backgroundColor: props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange}></textarea>
          <button className="btn btn-primary my-3 mx-1 " onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary my-3 mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
          <button className="btn btn-primary my-3 mx-1" onClick={handleClearText}>Clear Text</button>
          <button className="btn btn-primary my-3 mx-1" onClick={handleCopyText}>Copy Text</button>
          <button className="btn btn-primary my-3 mx-1" onClick={handleSpace}>Remove Extra Space</button>



        </div>
        <div className="container my-3" >
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>Can be read in {0.008*text.split(" ").length} Minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Your Text To Preview"}</p>

        </div>
        </div>

    </>
  );
}
