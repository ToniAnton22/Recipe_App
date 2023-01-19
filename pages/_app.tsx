import "../styles/globals.css";
import Header from "../components/Header";
import Banner from "../components/Banner";

import type {AppProps} from "next/app";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <div className="bg-orange-200 border-x-orange-800  min-h-screen">
      <Header />
      <Banner />

      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
