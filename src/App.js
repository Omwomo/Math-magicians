import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import DisplayQuotes from './components/quote';

function App() {
  return (
    <Router>
      <div className="App">
        <switch>
          <Route path="/Calculator">
            <Calculator />
          </Route>
          <Route path="/quote">
            <DisplayQuotes />
          </Route>
        </switch>
      </div>
    </Router>
  );
}

export default App;
