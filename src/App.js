import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MoviesService } from "./api/MoviesServices";
import { Header } from "./components/header";
import { MoviesList } from "./components/MoviesList";
import { MoviesContainer } from "./styles/MoviesContainer";
import { About } from "./view/About";
import { Home } from "./view/Home";
import { MovieDetail } from "./view/MovieDetail";

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
