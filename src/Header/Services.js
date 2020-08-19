import React from 'react';
import {useState,useEffect} from 'react';
import { CardTitle,Card,CardText,CardActions,Button,CardMenu,IconButton } from 'react-mdl';
function Services() {
    useEffect(()=>{
        fetchItems()

    },[])
    const[items,setItems]=useState([]);
    const fetchItems=async()=>{
        const data=await fetch('https://bakesaleforgood.com/api/deals')

        const items=await data.json();
        console.log(items);
        setItems(items);
    }
    return(
      
      <div style={{display:"flex",flexWrap:'wrap',justifyContent:'space-around',position:"sticky"}}>
      {items.map(item=>(
     <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
     <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>{item.title}</CardTitle>
     <CardText>
         {item.price}
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