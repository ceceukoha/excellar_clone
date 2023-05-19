import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
// import Service from "./pages/Services/Service";
// import Contact from "./pages/Contact/Contact";
import TopNav from "./ui/TopNav/TopNav";
import Footer from "./ui/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopNav />
      {/* <Home /> */}
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        {/* <Route path="/service" Component={Service} /> */}
        {/* <Route path="/contact" Component={Contact} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
