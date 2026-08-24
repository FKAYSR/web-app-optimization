const handleClick = () => {
  console.log("Button clicked!");
};

export default function Button() {
  return <button onClick={handleClick}> "Click here" </button>;
}
