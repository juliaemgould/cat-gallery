import React, { useState, useEffect } from "react";
import { fetchPictures } from "./fetchPictures";
import { getMyFavorites } from "./fetchPictures";
import { addToFavorites } from "./fetchPictures";
import ImageFilter from "./ImageFilter.react";
import Paginate from "./Paginate.react";
import Favorite from "./Favorite.react";
import "./gallery.css";

function Gallery(props) {
  //This section updates the page number whenever the Previous and Next buttons are clicked
  const [page, setPage] = useState(0);

  async function prevKittens() {
    setPage(page - 1);
  }

  async function nextKittens() {
    setPage(page + 1);
  }

  //state value to update fetch for image type
  const [imageType, imageFilterValue] = useState("");
  //state value to display images
  const [catInfo, setCatInfo] = useState([]);
  //Whenever the buttons are clicked or type is updated, fetch the pictures with promised url
  useEffect(() => {
    if (imageType !== "favorite") {
      fetchPictures({ page: page, imageType: imageType }).then(setCatInfo);
    }
  }, [page, imageType]); //These are the state variables that trigger the fetch function with the useEffect hook

  //state values to add favorites
  const [favorites, setFavorites] = useState([]);
  const [image_id, setImage_id] = useState([]);
  useEffect(() => {
    addToFavorites({ image_id: image_id }).then(setImage_id);
  })[image_id];

  //This hook retrieves favorites
  useEffect(() => {
    getMyFavorites({ page: page }).then(setFavorites);
  }, [page]);

  async function faved() {
    console.log("clicked");
  }

  return (
    <div>
      <ImageFilter selection={imageType} setSelection={imageFilterValue} />
      <Paginate prev={prevKittens} next={nextKittens} pageCount={page + 1} />
      <div className="gallery grid">
        {imageType === "favorite" ? (
          <div>
            {favorites.map((id, i) => (
              //Iterates the array of urls fetched by id and displays them as their image
              <div className="image-con">
                <img alt="" src={id.url} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            {catInfo.map((id) => (
              //Iterates the array of urls fetched by id and displays them as their image
              <div className="image-con">
                <img alt="" src={id.url} onDoubleClick={faved} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
