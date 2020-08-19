import React, { Component } from 'react';
import '../Style/nav.css';
import Navbar from './Navbar';
import Cover from './Cover';
import Story from './Story';
import Ourteam from './Ourteam';
import Services from './Services';
import Contact from './Contact';

class Nav extends Component {
    render(){
        return (
           
            <div className="App">

             
            <div style={{marginTop:'5%'}}>
            {/* <Route path="/" exact component={App}/> */}
            <Story/>

            </div>
            <Ourteam/>
            <div style={{display:"flex",justifyContent:"space-around",paddingTop:'40px'}}>
            <Services />
            </div>
            <Contact/>
          
            
        
            

           
            </div>
            
          );
    } 
}

export default Nav;
