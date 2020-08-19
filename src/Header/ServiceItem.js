import React from 'react';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
function ServiceItem() {
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
   
  return (
    <div className="App">
      {items.map(item=>(
    <h1 key={item.key}>
        {item.title}
          </h1>
      ))}
      </div>
   
  ) 
  
}

export default ServiceItem;
