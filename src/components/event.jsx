function Newevent() {
  const mouseHover = () => {
    alert("You touched me");
  };
  return (
    <>
      <div onMouseOver={mouseHover}>Click me</div>
    </>
  );
}
function event() {
  const click = () => {
    alert("You clicked me");
  };
  return (
    <>
      <button onClick={click}>Click me</button>
      <Newevent />
    </>
  );
}

export default event;

// // export default event;
