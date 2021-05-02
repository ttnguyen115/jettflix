import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import HomePage from './components';
import NotFound from './pages/notfound';
import './_app.scss';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ HomePage } exact />
        <Route path='*' component={ NotFound } exact />

        <Route>
          <Redirect to="/" />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
