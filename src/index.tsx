import { h, render } from 'preact';
import { Router, Route } from 'preact-router';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import './style.css';

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
	  <Route path="/about" component={About} />
	  <Route path="/contact" component={Contact} />
    </Router>
  );
}

render(<App />, document.getElementById('app'));