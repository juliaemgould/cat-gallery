/*This context helps with pagination
It's needed to pass the properties from the pagination component 
as it is not a direct parent*/

import { createContext, useState } from "react";

const PageContext = createContext({
  page: 0,
  setPage: (pageNum) => {}
});

export function PageContextProvider(props) {
  const [pageNum, setPageNum] = useState(0);
  //This section updates the page number whenever the Previous and Next buttons are clicked

  const context = {
    page: pageNum,
    setPage:setPageNum
  };

  return (
    <PageContext.Provider value={context}>
      {props.children}
    </PageContext.Provider>
  );
}

export default PageContext;
