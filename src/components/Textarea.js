
import React ,{useState} from 'react'

export default function Textarea(props) {
    const handleUpClick=()=>{
        // console.log('button was clicked' + text);
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert('Converted to Upppercase','success');
    }
    const handleLoClick=()=>{
        // console.log('button was clicked' + text);
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert('Converted to lowercase','success');
    }
    const handleReClick=()=>{
        let newrRev=text.split("").reverse().join("");
        setText(newrRev);
        props.showAlert('message reversed','success');
    }
    const handleClearClick=()=>{
        let newText=("");
        setText(newText);
        props.showAlert('message cleared','success');
    }

    const handleOnChange=(event)=>{
        // console.log('handleOnChange');
        setText(event.target.value);
    }
    const[text,setText]= useState('');
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'? 'white':'black'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                {/* <label for="myBox" className="form-label"> Textarea</label> */}
                <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? '#1a382a':'white', color: props.mode === 'dark'? 'white':'black'}} id="myBox" rows="6"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleReClick}>Reverse the statement</button>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleClearClick}>Clear</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'? 'white':'black'}}>
            <h3>Your text summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter your text in the above textarea to preview here."}</p>
        </div>
        </>
    )
}
