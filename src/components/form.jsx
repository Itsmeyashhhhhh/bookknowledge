import { useState, useRef } from "react";

function Form() {
  const [name,setName]=useState("")
  const inputValue = useRef();
  console.log("rerendering ...")
  const handelSubmit = (e) => {
    e.preventDefault();
    setName(inputValue.current.value);
  };
  return (
    <form onSubmit={handelSubmit}>
      <input type="text" placeholder="enter your name" ref={inputValue} />
      <button type="submit">Submit</button>
      <h1>{name}</h1>
      
    </form>
  );
}

export default Form;
