import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../index.css";

export default function CastList() {
  const [castList, setCastList] = useState({});
  const [creatives, setCreatives] = useState([]);
  const [castMembers, setCastMembers] = useState([]);
  const [attributes, setAttributes] = useState({});


  async function getCastData() {
    await fetch(
      `https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban`
    )
      .then((response) => response.json())
      .then((data) => {
        setCastList(data.data);
        setCreatives(data.included);
        setCastMembers(data.included);
        setAttributes(data.data.attributes);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getCastData();
  }, []);


  const filteredCreatives = creatives.filter(
    (item) => item.type === "creatives"
  );

  const filteredCastMembers = castMembers.filter(
    (item) => item.type === "castRoles"
  );

  return (
    <div>
      <div className="production-data">
        <div className="production-data-list">
          <h1>{attributes.title}</h1>
          <p>Date: 10/03/2023</p>
            <p dangerouslySetInnerHTML={{__html:attributes.shortDescription}} /> 

          <h1>Creatives</h1>
          {filteredCreatives.map((creator) => (
            <div key={creator.id}>
              <p>
                {creator.attributes.role} - {creator.attributes.name}
              </p>
            </div>
          ))}
          <h1>Cast</h1>
          {filteredCastMembers.map((cast) => (
            <div key={cast.id}>
              <p>
                {cast.attributes.role} - {cast.attributes.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
