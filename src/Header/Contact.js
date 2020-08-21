import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';




class Contact extends Component {
   render(){
       return(
        <div id="contact"  className="jumbotron jumbotron-fluid" style={{marginTop:"6%",fontStyle:"oblique"}}>


<center><b>Got a question? We'd love to hare from you. Send us a message and we'll 
                    respond as soon as possible.</b></center>

                    {/* <form action="">
                        <div className="form">
                      <label>
                          Name:
                        <input type="text"/>
                        </label>
                        </div>
                     <div className="form">
                        <label>
                          E-mail:
                        <input type="text"/>
                        </label>
                        </div>
                       <div className="form">
                        <label>
                          Message:
                        <input type="text"/>
                        </label>
                        </div>
                      
                                   
                      
            
                    
                    </form> */}
                    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" style={{width:"15%",marginLeft:"45%"}} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" style={{width:"15%",marginLeft:"45%"}} />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
                    
            </div>
       )
   }
}

export default Contact;

