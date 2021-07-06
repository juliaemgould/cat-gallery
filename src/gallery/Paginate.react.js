import React, {useContext } from "react";
import PageContext from "./page-Context";

function Paginate(props) {
  const pageCtx = useContext(PageContext);
  //This section updates the page number whenever the Previous and Next buttons are clicked

  return (
    <div className="pages">
      {pageCtx.page < 1 ? ( //Evalautes if it's the first page and swaps button to prevent action
        <button id="prev" className="disabled" disabled>
          Previous
        </button>
      ) : (
        <button id="prev" onClick={() => pageCtx.setPage(pageCtx.page - 1)}>
          Previous
        </button>
      )}
      <span>page {pageCtx.page + 1}</span>
      <button id="next" onClick={() => pageCtx.setPage(pageCtx.page + 1)}>
        Next
      </button>
    </div>
  );
}
export default Paginate;
