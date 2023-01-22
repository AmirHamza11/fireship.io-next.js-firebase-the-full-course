import "@/styles/globals.css";

import { GetServerSideProps } from "next";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
