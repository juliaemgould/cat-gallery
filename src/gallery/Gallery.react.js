import React, { useContext } from "react";
import FilterContext from "./Filter-context";
import ImageFilter from "./ImageFilter.react";
import Paginate from "./Paginate.react";
import "./gallery.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faHeart);
library.add(far, faHeart);

function Gallery(props) {
  const filterCtx = useContext(FilterContext);

  return (
    <div>
      <div className="main-container">
        <h1>La Galerie des Chats en Violet</h1>
        <ImageFilter />
        <div>
        { //Remove pagination for favorites 
        (filterCtx.selection !== "favorite")? <Paginate /> : ""}
       
        </div>

        <div className="gallery grid">{props.children}</div>
      </div>
    </div>
  );
}

export default Gallery;

/*Things turned into a bowl of spaghetti in Gallery-old. 
I made more componenets and cleaned things up. */
