import React from "react";
import ReactDOM from "react-dom";
import { FavContextProvider } from "./gallery/Fav-context";
import { FilterContextProvider } from "./gallery/Filter-context";
import { PageContextProvider } from "./gallery/page-Context";
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
  <FavContextProvider>
    <FilterContextProvider>
    <PageContextProvider>
      <App />
      </PageContextProvider>
    </FilterContextProvider>
  </FavContextProvider>,
  document.getElementById("root")
);

/* I kept getting the following error:
"Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. 
You likely forgot to export your component from the file it's defined in, 
or you might have mixed up default and named imports. ""

It resolved when I created a new fork*/
