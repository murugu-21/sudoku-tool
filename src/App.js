import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Game from "./components/Game";
import Upload from "./components/Upload";
import About from "./components/About";
import Question from "./components/Question";
function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Switch>
        <Route exact path="/" component={Game} />
        <Route path="/upload" component={Question} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
