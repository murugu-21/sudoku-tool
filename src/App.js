import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect, Route, Switch } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Game from "./components/Game";
import About from "./components/About";
function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Switch>
        <Route exact path="/" component={Game} />
        <Route path="/about" component={About} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
