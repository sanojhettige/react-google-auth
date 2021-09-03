import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from '@material-ui/core/Container';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <React.Fragment>
      <Container style={{padding: 0}}>
      <Router>
      <Header />
      <div style={{padding: '10px 25px 10px 25px'}}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
      </div>
  <Footer />
  </Router>
      </Container>
    </React.Fragment>
  );
}

export default App;
