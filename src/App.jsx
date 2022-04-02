import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/home/home";
import AboutMe from "./components/about-me/about-me";
import Imagenes from "./components/images/imagenes";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element= { <Home /> } />
        <Route path="/about-me" element= { <AboutMe /> } />
        <Route path="/search-photos" element= { <Imagenes /> } />
      </Routes>
    </div>
  );
}

export default App;
