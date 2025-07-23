const Greeting = ({ timeOfDay }) => {
  return timeOfDay === "morning" ? (
    <h3>Good Morning!</h3>
  ) : (
    <h3>Good Afternoon!</h3>
  );
};

export default Greeting;
