//import statements
import React, { useState, useEffect } from "react";
import "./App.css";
//import components
import MainNewsList from "../MainNewsList/MainNewsList.tsx";
import SearchBar from "../SearchBar/SearchBar.tsx";
import SideBar from "../SideBar/SideBar.tsx";

//create function App
function App() {
  //create states: one for the articles, and another for the userInput in the SearchBar
  const [articles, setArticles] = useState([]);
  const [userInput, setUserInput] = useState("example");

  //fetch the API
  useEffect(() => {
    //if there is no userInput, return nothing.
    if (!userInput) {
      setUserInput("example");
    }
    //else, fetch the API considering the userInput
    async function getResults() {
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=${userInput}&lang=en&country=uk&max=8&apikey=06a2bd061e16855986385fcc4c9f6f42`
      );
      const data = await response.json();
      setArticles(data.articles);
    }
    getResults();
  }, [userInput]);
  //In the line above, there is a hook that will run the code inside the function whenever the userInput value changes

  //create a function to handle the click event of the search button
  const handleClick = (searchTerm: string) => {
    setUserInput(searchTerm);
  };

  //Return the JSX to render the page
  return (
    <div className="App">
        <img src="https://i.imgur.com/YFPRZ8I.png" alt="logo" id="logo"/>
        <SearchBar handleClick={handleClick} />
      <header className="App-header">
        <MainNewsList articles={articles} />
        {/* <SideBar /> */}
      </header>
    </div>
  );
}

export default App;
