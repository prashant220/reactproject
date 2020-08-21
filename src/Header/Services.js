import React from 'react';
import {useState,useEffect} from 'react';
import { CardTitle,Card,CardText,CardActions,Button,CardMenu,IconButton } from 'react-mdl';
function Services() {
    useEffect(()=>{
        fetchItems()

    },[])
    const[items,setItems]=useState([]);
    const text="hello";
    const fetchItems=async()=>{
        const data=await fetch('https://5f3eac0813a9640016a68fea.mockapi.io/api/v1/books')

        const items=await data.json();
        console.log(items);
        setItems(items);
    }
       return(
     
        
      <div id="service" style={{display:"flex",flexWrap:'wrap',justifyContent:'space-around',position:"sticky",marginTop:"4%"}}>
        
      {items.map(item=>(
     <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
     <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://wsiretail.com/wp-content/uploads/2019/05/Mobile-application-725x550.jpg) center / cover'}}>{item.name}</CardTitle>
     <CardText>
         {item.author}
     </CardText>
     <CardActions border>
         <Button colored>Get Started</Button>
     </CardActions>
     <CardMenu style={{color: '#fff'}}>
         <IconButton name="share" />
     </CardMenu>
 </Card>
      ))}


      </div>
    )
  }

    export default Services;