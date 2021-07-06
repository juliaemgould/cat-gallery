import { createContext, useState, useEffect } from "react";
import { getMyFavorites } from "./fetchPictures";

const FavContext = createContext({
  favs: [],
  totalFavs: 0,
  itemIsFavorite: ({ image_id: imageId }) => {},
  removeFavorite: ({ image_id: imageId }) => {}
});

export function FavContextProvider(props) {
  const [catPics, setFavPics] = useState([]);
  useEffect(() => {
    getMyFavorites({}).then(setFavPics);
  }, []);
  /* useEffect(() => {
    getMyFavorites({}).then((data) => {
      const catPics = [];

      for (const key in data) {
        const catpic = {
          id: key,
          ...data[key]
        };

     
      }
      setFavPics(catPics);
    });
  },[]);*/

  function itemIsFavoriteHandler({ image_id: imageId }) {
    return catPics.some((catpic) => catpic.id === { image_id: imageId });
  }

  function removeFavoriteHandler({ image_id: imageId }) {
    setFavPics((prevUserFavs) => {
      return prevUserFavs.filter(
        (catpic) => catpic.id !== { image_id: imageId }
      );
    });
  }

  const context = {
    favs: catPics,
    totalFavs: catPics.length,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavContext.Provider value={context}>{props.children}</FavContext.Provider>
  );
}

export default FavContext;
