import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CardDetails from './pages/CardDetails';
import Home from './pages/Home';

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

export default App;
