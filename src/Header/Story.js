import React, { Component } from 'react';
import OurTeam from './Ourteam';

class Nav extends Component {
    render(){
        return (
            <div className="container" >
              <h2 id="about" className="h1-responsive font-weight-bold my-5">
            About us
          </h2>
                <div className="row" id="sec4">
                <div className="col-sm" id="about" >
                   
                    <center>
                    
                        
                    <h3 id style={{margintop: "56px"}}>Our story</h3>
                    <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official deserunt mollit anim id est laborum.
                        </p>
                    </center>
                </div>

                <div className="col-sm">
                    <center>
                        
                    <h3 style={{margintop: "56px"}}>Why choose us?</h3>
                    <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official deserunt mollit anim id est laborum.
                        </p>
                    </center>
                </div>

                <div className="col-sm">
                    <center>
                        
                    <h3 style={{margintop: "56px"}}>Our products</h3>
                    <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official deserunt mollit anim id est laborum.
                        </p>
                    </center>
                </div>


                    </div>
                  
            </div>
            
            
          );
    } 
    
}

export default Nav;
