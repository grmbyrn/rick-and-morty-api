import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cards from "./pages/Cards";
import CardDetails from './pages/CardDetails';

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  return (
    <>
      <Navbar />
      <Cards page='/' />
      <Footer />
    </>
  )
}

export default App;
