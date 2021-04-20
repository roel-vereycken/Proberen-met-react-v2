import React from 'react';
import RegisterForm from './components/RegisterForm';
import OverzichtGrid from './components/OverzichtGrid';
import PasswordForm from './components/PasswordForm';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import ProfielPagina from './components/ProfielPagina';
import Verplaatsingen from './components/Verplaatsingen';
import Styles from './style/style.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <>
    <Switch>
      <Route exact path="/" component={LoginForm}/>
      <Route path="/registratie" component={RegisterForm}/>
      <div>
      <Navbar/>
      <Route path="/verplaatsing" component={Verplaatsingen}/>
      <Route path="/profiel" component={ProfielPagina}/>
      <Route path="/wachtwoord" component={PasswordForm}/>
      <Route path="/overzicht" component={OverzichtGrid}/>
      </div>
    </Switch>
    </>
    </Router>
  );
};

export default App;
