import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import DisplayQuotes from './components/quote';
import Navigation from './components/Navigation';
import HomePage from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/quote" element={<DisplayQuotes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
