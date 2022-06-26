import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import SlideUp from "./Components/SlideUp/SlideUp";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <SlideUp />
    </div>
  );
}

export default App;
