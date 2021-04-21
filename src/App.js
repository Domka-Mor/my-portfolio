import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Pages/Home/Home';
import MobileStore from './Components/Pages/MobileStore/MobileStore';
import BeachResort from './Components/Pages/BeachResort/BeachResort';
import MyPortfolio from './Components/Pages/MyPortfolio/MyPortfolio';
import Error from './Components/Pages/Error/Error';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';


export default class App extends React.Component {


  state = {
    loading: true
  };
  
  componentDidMount() {
    this.fakeRequest().then(() => {
      const el = document.querySelector(".preloader");
      if (el) {
        el.remove();  // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });
  }

  fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 2200));
  };


  render(){

    if (this.state.loading) {
      return null; //app is not ready (fake request is in process)
    }

    const DefaultRoutes = () => {
      return (
        <div>
          <Navbar/> 
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path="/about"  render={routeProps => <About {...routeProps} />}/> 
            <Route path="/projects"  render={routeProps => <Projects {...routeProps} />}/> 
            <Route path="/contact"  render={routeProps => <Contact {...routeProps} />}/>
            <Route component={Error}/>     
          </Switch>
        </div>
      );
    };

    return (
      <div className="App" data-barba="container">
        <BrowserRouter>             
          <Switch>
            <Route path="/mobilestore" render={routeProps => <MobileStore {...routeProps} />}/>   
            <Route path="/beachresort" render={routeProps => <BeachResort {...routeProps} />}/> 
            <Route path="/myportfolio"  render={routeProps => <MyPortfolio {...routeProps} />}/>          
            <Route component={DefaultRoutes} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
};

