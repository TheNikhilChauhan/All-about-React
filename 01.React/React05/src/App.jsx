import "./App.css";
import Greeting from "./components/Greeting";
import UserStatus from "./components/UserStatus";
import Temperature from "./components/Weather";

function App() {
  return (
    <>
      <Temperature temp={20} />
      <UserStatus loggedIn={true} isAdmin={false} />
      <Greeting timeOfDay={"morning"} />
    </>
  );
}

export default App;
