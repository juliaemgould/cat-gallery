import React, { useContext } from "react";
import "./gallery.css";
import FilterContext from "./Filter-context";
//This will send Imagetype value to fetch url located in AllCats component.

function ImageFilter(props) {
  const filterCtx = useContext(FilterContext);

  return (
    <div>
      <select onChange={filterCtx.selectImageType}>
        {filterCtx.images.map((selection) => (
          <option key={selection.value} value={selection.value}>
            {selection.label}
          </option>
        ))}
      </select>
    </div>
  );
}
export default ImageFilter;
