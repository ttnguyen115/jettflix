import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './components';
import Login from "./pages/login";
import NotFound from './pages/notfound';
import './_app.scss';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ HomePage } exact />
        <Route path="/login" component={ Login } exact />

        <Route path='*' component={ NotFound } exact />
      </Switch>
    </Router>
  );
}

export default App;
