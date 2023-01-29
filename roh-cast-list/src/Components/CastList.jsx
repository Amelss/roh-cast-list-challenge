import React from 'react'
import { useState } from 'react';
import "../index.css";



   

export default function CastList() {

    const [castList, setCastList] = useState({})
    const [creatives, setCreatives] = useState([])
   
   
    async function getCastData ()  {
        fetch(
            `https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban`
        )
            .then((response) => response.json())
            .then((data) => {
                setCastList(data)
                setCreatives(data.included)
             
                console.log(data);
                
            });
      
    }





    


    const filteredCreatives = creatives.filter(
        (item) => item.type === "creatives");
   
    
  return (
    <div>
      <div>
        <button onClick={getCastData}>Test</button>
        <div>
          
                  
     
   

          {/* Basic Layout of page with placeholders */}
    
               
                
                  <h1>Title:{}</h1>
          <p>Date:</p>
          <p>Description:</p>

          
                  <h1>Creatives:</h1>
                  {filteredCreatives.map((creator) => (
                      <div key={creator.id}>
                          <p>
                              {creator.attributes.name} - {creator.attributes.role}
                          </p>
                      </div>

                  ))}
                  <h1>Cast Title</h1>
                  
                
          <p>Cast Names and Roles:</p>
        </div>
      </div>
    </div>
  );
}
