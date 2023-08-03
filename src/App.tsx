import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {

  return (
    <> 
    <Header />
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/details"} element={<Details />} />
          <Route path={"*"} element={<Home />} />
        </Routes>
      </BrowserRouter>
    <Footer />
    </>
  )
}

export default App;
