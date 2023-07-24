// src/ItemListComponent.js
// import React from 'react';
import data from '../data-example';

const ItemListComponent = () => {
  return (
    <div>
      <h2>List of Items:</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <a href={item.link}>Learn More</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListComponent;
