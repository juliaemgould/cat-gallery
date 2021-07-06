import React, {useContext } from "react";
import CatPicsItem from "./CatPicsItem.react";
import FavContext from "./Fav-context";
import FilterContext from "./Filter-context";
function CatPicsList(props) {
  const filterCtx = useContext(FilterContext);
  /*The favorites object has a nest image onject. 
  I separated and conditionally displayed the items componenent becasue of this */
  if (filterCtx.selection === "favorite") {
  return (
    <div>
      {props.catPics.map((catpic) => (
        <CatPicsItem
          key={catpic.id}
          id={catpic.id}
          url={catpic.image.url}
          favid={catpic.id} 
        />     
      ))}
    </div>
  );}
  return (
    <div>
      {props.catPics.map((catpic) => (
        <CatPicsItem
          key={catpic.id}
          id={catpic.id}
          url={catpic.url}
          favid={catpic.id}
        />
      ))}
    </div>
  );
}

export default CatPicsList;
