import React, {Component} from 'react';
import './App.css';
import NavigationBar from './components/Layouts/NavigationBar';
import Footer from './components/Layouts/Footer';
import {Switch,Route} from 'react-router-dom';
import NotFoundPage from './components/Pages/NotFoundPage';
import Home from './components/Pages/Home';
import News from './components/Pages/News';
import Contacts from './components/Pages/Contacts';
import Details from './components/Pages/Details';





class App extends Component {
  render(){
    return (
      <div>
        <NavigationBar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/news" component={News}/>
            <Route path="/contacts" component={Contacts}/>
            <Route path="/details" component={Details}/>
            <Route  component={NotFoundPage}/>
          </Switch> 
        <Footer/>
      </div>
    );
  }
  }
  
export default App;
