import { createContext, useState, useEffect } from "react";
import { getMyFavorites } from "./fetchPictures";

const FavContext = createContext({
  favs: [],
  totalFavs: 0
});

export function FavContextProvider(props) {
  const [catPics, setFavPics] = useState([]);
  useEffect(() => {
    getMyFavorites().then(setFavPics);
  });

  const context = {
    favs: catPics,
    totalFavs: catPics.length
  };

  return (
    <FavContext.Provider value={context}>{props.children}</FavContext.Provider>
  );
}

export default FavContext;
