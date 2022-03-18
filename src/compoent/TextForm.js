import React, { useState } from 'react';



export default function TextForm(props) {
    const [text, setText] = useState("");

    const HandleUpClick = () => {
        const newText = text.toUpperCase()
        setText(newText)
    }
    const HandleLowClick = () => {
        const newText = text.toLowerCase()
        setText(newText)
    }
    const HandleonChange = (e) => {
        console.log("HandleonChange was clicked");
        setText(e.target.value)
    }

    // text to morse code 

    const convertToBinary = (str) => {
        return str.split('').map(function (char) {
            return char.charCodeAt(0).toString(2);
        }).join(' ');
    };
    const convertBtoT = (str) => {
        return str.split(/\s/).map(function (val) {
            return String.fromCharCode(parseInt(val, 2));
        }).join("");
    }


    const HandleTBClick = () => {
        let nText = convertToBinary(text)
        setText(nText)
    }




    const HandleBTClick = () => {
        let nText = convertBtoT(text)
        setText(nText)
    }

    const [myStyle, setMyStyle] = useState({
        color: "white",
        backgroundColor: "black",
        borderRadius: 10
    })
    const [BtnText, setBtnText] = useState(" Enable Dark mode")

    const toggleStyle = () => {

        if (myStyle.color === "white") {
            setMyStyle({
                color: "black",
                backgroundColor: "white"
            })
            setBtnText("Enable Dark Mode")
        } else {
            setMyStyle({
                color: "white",
                backgroundColor: "black"
            })
            setBtnText("Enable Light Mode")

        }


    }
    const handleCopy = () => {
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
    }

    const removeExtraSpace = () => {
        let newtxt = text.split(/[ ]+/)
        setText(newtxt.join(" "))
    }





    return (

        <>
            <br />
            <br />

            <div className='container' style={myStyle}>
                <button className="btn btn-block btn-success" onClick={toggleStyle}>{BtnText}</button>


                <div className="container" style={myStyle}>
                    <div className="mb-3">
                        <br />
                        <textarea className="form-control" id="myBox" rows="8" placeholder='Enter Your Text Here' value={text} onChange={HandleonChange}></textarea>

                    </div>
                    <button className="btn btn-primary mx-3" onClick={HandleUpClick}>Convert to UpperCase</button>
                    <button className="btn btn-primary mx-3" onClick={HandleLowClick}  >Convert to Lowercase</button>
                    <button className="btn btn-primary mx-3" onClick={HandleTBClick}  >Convert to Binary</button>
                    <button className="btn btn-primary mx-3" onClick={HandleBTClick}  >Convert to Text</button>
                    <button className="btn btn-primary mx-3" onClick={handleCopy}  >Copy Text</button>

                    <button className="btn btn-primary mx-3" onClick={removeExtraSpace}  >remove extra spaces</button>


                </div>
            </div >

            <div className="container my-5" style={myStyle}>
                <h5>Your Text Summary</h5>


                <p>words in the string is : {text.split(" ").length}
                    <br />
                    characters in the string is : {text.length}
                    <br />
                    it'll take {0.008 * (text.split(" ").length)} minutes to read
                </p>

                <h5>preview</h5>
                <p>{text}</p>
            </div>
        </>

    )
}
