const Greeting = () => {
  const name = "John";
  const date = new Date();
  return (
    <div style={{ Color: "white" }}>
      <h1>Name: {name}</h1>
      <p>Date: {date}</p>
    </div>
  );
};

export default Greeting;
