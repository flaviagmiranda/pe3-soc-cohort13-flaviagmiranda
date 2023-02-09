//The goal of this component is to be host the search bar and the search button

import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({ handleClick }): object {
    //create a state for the searched tearm. 
  const [searchTerm, setSearchTerm] = useState("");

  //create a handleChange function to change the value of searchTerm once the button is clicked
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  //Render an input element for the search bar, and a button for the search button
  return (
    <div className="search">
      <input type="text" value={searchTerm} onChange={handleChange}></input>
      <button onClick={() => handleClick(searchTerm)}>Search</button>
    </div>
  );
}
