import React, { useState, useEffect } from "react";
import FavPicsList from "./FavPicsList.react";
import { getMyFavorites } from "./fetchPictures";
import "./gallery.css";

function Favorite(props) {
  //state value to display images
  const [catPics, setCatPics] = useState([]);
  //Whenever the buttons are clicked or type is updated, fetch the pictures with promised url

  useEffect(() => {
    getMyFavorites({}).then(setCatPics);
  }, []); //These are the state variables that trigger the fetch function with the useEffect hook
  return <FavPicsList catPics={catPics} />;
}

export default Favorite;
