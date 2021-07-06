import React from "react";
import ReactDOM from "react-dom";
import { FavContextProvider } from "./gallery/Fav-context";
import { FilterContextProvider } from "./gallery/Filter-context";
import Gallery from "./gallery/Gallery.react";
import "./styles.css";
import AllCats from "./gallery/AllCats.react";

function App() {
  return (
    <Gallery>
      <AllCats />
    </Gallery>
  );
}

ReactDOM.render(
  <FilterContextProvider>
    <FavContextProvider>
      <App />
    </FavContextProvider>
  </FilterContextProvider>,
  document.getElementById("root")
);
