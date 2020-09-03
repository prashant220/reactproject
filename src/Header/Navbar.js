import React, { Component } from 'react';

import { Layout,Header,Navigation,Drawer,Content } from 'react-mdl';
import { HashLink as Link } from 'react-router-hash-link';
class Navbar extends Component {
    render(){
        return (
           
            <div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        <Header transparent title="MODERN SOLUTIONS" style={{color: 'white'}}>
            <Navigation>
            <Link smooth to="#" ><a href="#"style={{color:"white"}}>Home</a></Link>
                <Link smooth to="#about" ><a href="#"style={{color:"white"}}>About us</a></Link>
                <Link smooth to="#service"><a href="#"style={{color:"white"}}>Our Service</a></Link>
               <Link smooth to="#team"> <a href="#"style={{color:"white"}}>Our team</a></Link>
               <Link smooth to="#contact"> <a href="#"style={{color:"white"}}>Contact us</a></Link>
              </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
         

            
          );
    } 
}

export default Navbar;
