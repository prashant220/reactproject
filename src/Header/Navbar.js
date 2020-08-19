import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Layout,Header,Navigation,Drawer,Content } from 'react-mdl';
class Navbar extends Component {
    render(){
        return (
            // <div >
            //     <section className ="nav-bar">
            //     <div className="nav-container">
            //     <div className="brand">
            //         <span style={{textDecoration:"none",marginLeft:"-65px"}}>INNOVEGIC STUDIO</span>

            //     </div>
            //   <nav>
            //       <ul>
            //           <Link to="/">
            //           <li>Home</li>
            //           </Link>
            //           <Link to="/story"> <li>About us</li>
            //           </Link>
            //          <Link to="/service">
            //          <li>Our service</li>
            //          </Link>
            //           <Link>
            //           <li>Our product</li>
            //           </Link>
                      
            //           <Link>
            //           <li>Portfolio</li>
            //           </Link>
            //           <Link to="/team">
            //           <li>Our team</li>
            //           </Link>
            //           <Link to="/contact"> 
            //           <li>Contact</li>
            //           </Link>
                      
            //       </ul>
            //   </nav>
            
            //   </div>
            //   </section>
             
            // </div>

            <div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        <Header transparent title="INNOVEGIC STUDIO" style={{color: 'white'}}>
            <Navigation>
                <Link to="/about" ><a href="#"style={{color:"white"}}>About us</a></Link>
                <Link to="/service"><a href="#"style={{color:"white"}}>Our Service</a></Link>
               <Link to="/team"> <a href="#"style={{color:"white"}}>Our team</a></Link>
               <Link to="/contact"> <a href="#"style={{color:"white"}}>Contact us</a></Link>
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