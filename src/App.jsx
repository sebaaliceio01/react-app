import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/home/home";
import AboutMe from "./components/about-me/about-me";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element= { <Home /> } />
        <Route path="/about-me" element= { <AboutMe /> } />
      </Routes>
    </div>
  );
}

export default App;
