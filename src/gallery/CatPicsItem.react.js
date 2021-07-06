import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addToFavorites } from "./fetchPictures";
import FavContext from "./Fav-context";

function CatPicsItem(props) {
  const [fav, setFav] = useState(false);


  function favHandler() {
    /*Checks if image is already a favorite; 
     then removes existing fav on double click*/
      addToFavorites({
        imageId: props.id
      });
      setFav(!fav);
      console.log(props.id);
  }

  return (
    <div className="image-con" onDoubleClick={favHandler}>
      <img alt={props.title} src={props.url} id={props.favid} />
      <div className="favorite">
        {fav && <FontAwesomeIcon icon={"heart"} />}
      </div>
    </div>
  );
}

export default CatPicsItem;
