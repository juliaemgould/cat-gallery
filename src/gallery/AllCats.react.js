import React, { useState, useEffect, useContext } from "react";
import CatPicsList from "./CatPicsList.react";
import { fetchPictures } from "./fetchPictures";
import FilterContext from "./Filter-context";
import FavContext from "./Fav-context";
import PageContext from "./page-Context";

function AllCats(props) {
  //state value to display images
  const [catPics, setCatPics] = useState([]);
  const filterCtx = useContext(FilterContext);
  const favCtx = useContext(FavContext);
  const pageCtx = useContext(PageContext);
  //Whenever the buttons are clicked or type is updated, fetch the pictures with promised url

  useEffect(() => {
    fetchPictures({ page: pageCtx.page +14, imageType: filterCtx.selection }).then(
      setCatPics
    );
  }, [pageCtx.page, filterCtx.selection]); //These are the state variables that trigger the fetch function with the useEffect hook

  /* Condition to show favorite images. 
  The combination of filter context and fav context eliminated the use of routing reveal favorites */
  if (filterCtx.selection === "favorite") {
    return <CatPicsList catPics={favCtx.favs} />;
  }
  return <CatPicsList catPics={catPics} />;
}

export default AllCats;
