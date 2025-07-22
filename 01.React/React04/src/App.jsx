import "./App.css";
import Person from "./components/Person";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Person name="Joey" age="27" />
      <Product name="smart phone" price="25,000" />
    </>
  );
}

export default App;
