import React, { useState, useEffect, useContext } from "react";
import CatPicsList from "./CatPicsList.react";
import FavContext from "./Fav-context";
import "./gallery.css";

function Favorite() {
  //Provides context to display favorites
  const favCtx = useContext(FavContext);
  //Sets the state variable to deliver favorite items
  //const [favs, setFavs] = useState([]);
  //Hook calls function to retrieve favorites

  //Whenever the buttons are clicked or type is updated, fetch the pictures with promised url

  return <CatPicsList catPics={favCtx.favs} />;
}

export default Favorite;
