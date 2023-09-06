import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "Success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "Success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Clear text", "Success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges();
        props.showAlert("Copy Text", "Success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove Extra Space", "Success");
    }

    const [text, setText] = useState('');
    // setText("new text");
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div>
                    <h1>{props.heading}</h1>
                    <div className="mb-4">
                        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} rows="3"></textarea>
                    </div>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert to Uppercase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick} >Convert to Lowercase</button>
                    <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleClearClick} >Clear Text</button>
                    <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleCopy} >Copy Text</button>
                    <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleExtraSpace} >Remove extra spaces</button>
                </div>
            </div>
            <div className="container my-4" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text: "Enter something in the textbox above the preview it here"}</p>
            </div>
        </>

    )
}
