import './App.css';
import Navbar from "./components/navbar";
import Home from "./pages/home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from "./pages/about";
import BikeTours from "./pages/bike-tours";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/home' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/tours' component={BikeTours}/>
          <Route default component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
