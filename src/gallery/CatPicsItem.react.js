import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addToFavorites } from "./fetchPictures";
import FavContext from "./Fav-context";

function CatPicsItem(props) {
  const favCtx = useContext(FavContext);
  const [fav, setFav] = useState(false);

  function favHandler() {
    /*Checks if image is already a favorite; 
     then removes existing fav on double click*/
    if (fav) {
      favCtx.removeFavorite({ imageId: props.id });
      setFav(!fav);
      console.log("deleted");
    } else {
      //Adds image to favorites object and hearts image
      addToFavorites({
        imageId: props.id
      });
      setFav(fav);
    }
  }

  return (
    <div className="image-con" onDoubleClick={favHandler}>
      <img alt={props.title} src={props.url} id={props.image} />
      <div className="favorite">
        {!fav && <FontAwesomeIcon icon={"heart"} />}
      </div>
    </div>
  );
}

export default CatPicsItem;
