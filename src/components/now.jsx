import { useRef } from "react";
function now() {
  const headingRef = useRef(null);
  console.log("hello");
  const changeText = () => {
    headingRef.current.textContent = "Hello World";
  }
  return (
    <>
      <h1 ref={headingRef}>now</h1>
      <button onClick={changeText}>Click me</button>
    </>
  )
}

export default now
