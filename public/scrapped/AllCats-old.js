import React, { useState, useEffect } from "react";
import CatPicsList from "./CatPicsList.react";
import { fetchPictures } from "./fetchPictures";

function AllCats(props) {
  //state value to display images
  const [catPics, setCatPics] = useState([]);
  //Whenever the buttons are clicked or type is updated, fetch the pictures with promised url

  useEffect(() => {
    fetchPictures({ page: props.page, imageType: props.imageType }).then(
      setCatPics
    );
  }, [props.page, props.imageType]); //These are the state variables that trigger the fetch function with the useEffect hook
  return <CatPicsList catPics={catPics} />;
}
export default AllCats;
