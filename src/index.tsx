import { h, render } from "preact";
import { Router, Route } from "preact-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { RadioProvider } from "./utils/RadioContext";
import { RadioPlayer } from "./components/RadioPlayer";
import "./themes/style.css";
import { Community } from "./pages/Community";
import { Attributions } from "./pages/Attributions";
import { NotFound } from "./pages/_404";
import { Overlays } from "./pages/Overlays";
import { OverlayInstructions } from "./pages/Overlays/instructions";
import APIDocs from "./pages/api-docs";

function App() {
  return (
    <RadioProvider>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/community" component={Community} />
        <Route path="/attributions" component={Attributions} />
        <Route path="/overlays" component={Overlays} />
        <Route path="/overlays/instructions" component={OverlayInstructions} />
        <Route path="/api-docs" component={APIDocs} />
        <Route default component={NotFound} />
      </Router>
      <RadioPlayer />
    </RadioProvider>
  );
}

render(<App />, document.getElementById("app"));
