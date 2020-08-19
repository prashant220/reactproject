import React, { Component } from 'react';
import '../Style/nav.css';
import Navbar from './Navbar';
import Cover from './Cover';
import Story from './Story';
import Ourteam from './Ourteam';
import Services from './Services';
import Contact from './Contact';
import ServiceItem from './ServiceItem';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import FooterPage from './FooterPage';




class Nav extends Component {
    render(){
        return (
            <Router>
                <div>
                    <Navbar/>
             <Switch>
                    <Route path="/" exact component={Home}/>
            <Route path="/story" component={Story}/>
            <Route path="/team" component={Ourteam}/>
            <Route path="/service"  component={Services} />
           
            
                    </Switch>
                </div>
                <FooterPage/>
            </Router>
            
          );
    } 
}

export default Nav;
