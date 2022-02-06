import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("UpperCase was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to UpperCase", "Success");
    }
    const handleLowClick = () =>{
        console.log("LowerCase was Clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to LowerCase", "Success");

    }
    const handleClearClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("TextArea has been Cleared", "Success");

    }
    const handleOnChange = (event) =>{
        console.log("OnChange was Clicked");
        setText(event.target.value);
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text has been copied to Clipboard", "Copied");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces have been Removed", "Success");

    }

    const [text, setText] = useState("");
  return (
      <>
      <div className='container' style={{color: props.mode ==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <label htmlFor="myBox" className="form-label" ></label>
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick} >Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra Space</button>



    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}} >
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes Read</p>
    </div>
      </>
  )
}
