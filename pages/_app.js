import "../styles/globals.css";

import NavBar from "../components/NavBar";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../lib/context.js";
import { useUserData } from "../lib/hooks";

export default function App({ Component, pageProps }) {
  const userData = useUserData();
  return (
    <>
      <UserContext.Provider value={userData}>
        <NavBar />
        <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
    </>
  );
}
