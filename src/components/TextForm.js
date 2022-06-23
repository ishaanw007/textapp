import React, { useState } from "react";
export default function TextForm(props) {
  const handleupclick = () => {
    console.log("button clicked");
    setText(text.toUpperCase());
  };
  const handleonchange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  //   setText("jnxjknsdj");
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          {props.heading}
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleonchange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleupclick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
