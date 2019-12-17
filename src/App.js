import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home';

class App extends Component {
  
  render(){
    return (
        <React.Fragment>
          <Router>
              <Switch>
                  <Route exact path='/'> <Home/></Route>
              </Switch>
          </Router>
        </React.Fragment>
      )
  }    
}

export default App;
