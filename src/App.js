import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./screens/Main";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
