import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Sidebar from './components/sidebar';
import DetailScreen from './pages/detailscreen';
import HomeScreen from './pages/homescreen';
import './_app.scss';


const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false)

  const handleToggleSidebar = () => toggleSidebar(value => !value)

  return (
     <>
        <Header handleToggleSidebar={handleToggleSidebar} />
        <div className='app__container'>
           <Sidebar
              sidebar={sidebar}
              handleToggleSidebar={handleToggleSidebar}
           />
           <Container fluid className='app__main '>
              {children}
           </Container>
        </div>
     </>
  )
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>

        <Route path='/detail/:id' exact >
          <Layout>
            <DetailScreen />
          </Layout>
        </Route>
        
        <Route>
          <Redirect to="/" />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
