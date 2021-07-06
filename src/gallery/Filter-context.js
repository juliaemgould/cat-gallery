/*This context helps filter the images based on image type
It's needed to pass the properties from the image filter component 
as it is not a direct parent*/

import { createContext, useState, useContext } from "react";
import FavContext from "./Fav-context";

const FilterContext = createContext({
  images: [],
  selectImageType: () => {},
  selection: ""
});

export function FilterContextProvider(props) {
  //List of image options for the select menu
  const favCtx = useContext(FavContext);
  var imageTypes = [
    {
      value: "jpg,png,gif",
      label: "All Image Types"
    },
    {
      value: "gif",
      label: "gif "
    },
    {
      value: "jpg",
      label: "jpg"
    },
    {
      value: "png",
      label: "png"
    },
    {
      value: "favorite",
      label: "My favs ❤ " + favCtx.totalFavs //Displays total favorites 
    }
  ];

  //State value for the image filter menu
  const [imageType, setSelection] = useState();

  //function to set state and list images
  const imageFilterHandler = (e) => {
    setSelection(e.target.value);
  };

  const context = {
    images: imageTypes,
    selectImageType: imageFilterHandler,
    selection: imageType
  };

  return (
    <FilterContext.Provider value={context}>
      {props.children}
    </FilterContext.Provider>
  );
}

export default FilterContext;
