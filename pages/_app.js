import { useState } from "react";
import Context from "../context/context";
import initialState from "../context/state";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [notes, setNotes] = useState(initialState)
  return (
    <Context.Provider value={{notes, setNotes}}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}

export default MyApp;
