import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import { Form, Home, EndPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/end">
            <EndPage />
          </Route>
          <Route path="/">
            <Form />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
