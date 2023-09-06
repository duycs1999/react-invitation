import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Input from "./Pages/Input/Input";

function App() {
    return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Input}/>
                    <Route path="/invitation/:userName" component={Home}/>
                </Switch>
            </Router>
    );
}

export default App;
