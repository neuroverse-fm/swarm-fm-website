import { h, render } from 'preact';
import { Router, Route } from 'preact-router';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { RadioProvider } from './utils/RadioContext';
import { RadioPlayer } from './components/RadioPlayer';
import "./style.css";
import { Community } from './pages/Community';
import { Attributions } from './pages/Attributions';
import { NotFound } from './pages/_404';

function App() {
  return (
    <RadioProvider>
      <Router>
        <Route path="/" component={Home} />
	      <Route path="/about" component={About} />
	      <Route path="/contact" component={Contact} />
        <Route path="/community" component={Community} />
        <Route path="/attributions" component={Attributions} />
        <Route default component={NotFound} />
      </Router>
      <RadioPlayer />
    </RadioProvider>
  );
}

render(<App />, document.getElementById('app'));