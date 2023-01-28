import React from 'react'
import "../index.css";

export default function CastList() {


    
    const getCastList = () => {
     
        fetch(
          `https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data.data);
          });
    }


  return (
      <div>
          <div>
        <button onClick={getCastList}>Test</button>
              <div>
                  {/* Basic Layout of page with placeholders */}
                  
                <h1>Title: </h1>
                <p>Date:</p>
                <p>Description:</p>

                <h1>Creative Title:</h1>
                <p>Creatives Names and Roles:</p>

                <h1>Cast Title</h1>
                <p>Cast Names and Roles:</p> 
                  </div>
            
      
           
          </div>
       



    </div>
  )
}
