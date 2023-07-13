import React, { useState } from 'react'

export default function TextForm({ heading, mode, showAlert }) {
    const [text, setText] = useState("")
    const handleUpClick = () => {
        setText(text.toUpperCase())
        showAlert("Converted to uppercase", "success")
    }
    const handleLowClick = () => {
        setText(text.toLowerCase())
        showAlert("Converted to lowercase", "success")
    }
    const handelCopyClick = () => {
        // Get the text field
        var copyText = document.getElementById("exampleFormControlTextarea1");

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);

        // Alert the copied text
        showAlert("Text copied", "success")
    }
    const handelOnChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div className='container' style={{ color: `${mode === "dark" ? "white" : "black"}` }}>
                <h1>{heading}</h1>
                <div className="mb-3">
                    <textarea style={{ backgroundColor: `${mode === "dark" ? "grey" : "white"}`, color: `${mode === "dark" ? "white" : "black"}` }} onChange={handelOnChange} value={text} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button onClick={handleUpClick} className='mx-1 btn btn-primary'>Uppercase Conversion</button>
                <button onClick={handleLowClick} className='mx-1 btn btn-primary'>Lowercase Conversion</button>
                <button onClick={handelCopyClick} className='mx-1 btn btn-primary'>Copy Text</button>
            </div>
            <div className='container my-3' style={{ color: `${mode === "dark" ? "white" : "black"}` }}>
                <h2>Text summary</h2>
                <p>{text.split(' ').length} words and {text.length} characters.</p>
                <p>{text.split(' ').length * 0.008} Minutes read.</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Above text will be presented here!"}</p>
            </div>
        </>
    )
}
