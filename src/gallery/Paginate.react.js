import React, { useState, useEffect, createContext } from "react";

function Paginate(props) {
  const [page, setPage] = useState(0);
  //This section updates the page number whenever the Previous and Next buttons are clicked

  return (
    <div className="pages">
      {page < 1 ? ( //Evalautes if it's the first page and swaps button to prevent action
        <button id="prev" className="disabled" disabled>
          Previous
        </button>
      ) : (
        <button id="prev" onClick={() => setPage(page - 1)}>
          Previous
        </button>
      )}
      <span>page {page + 1}</span>
      <button id="next" onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}
export default Paginate;
