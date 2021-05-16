import './App.css';
import Navbar from "./components/navbar";
import Home from "./pages/home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Gallery from "./pages/gallery";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/home' component={Home}/>
          <Route path='/gallery' component={Gallery}/>
          <Route default component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
