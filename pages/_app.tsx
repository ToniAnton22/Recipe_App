import "../styles/globals.css";
import Image from "next/image";
import Link from "next/link";


import type {AppProps} from "next/app";

function MyApp({Component, pageProps}: AppProps) {
  return (<div className='bg-orange-200 border-x-orange-800  min-h-screen'>

      <nav className="p-7 bg-orange-300 flex justify-between border-b-2 border-t-2 border-x-orange-800 fix top-0 left-0 right-0 ">
        <Link href="/">
          <Image alt="logo" layout="fixed" src="/img/logo.png" width={102} height={46} className="cursor-pointer"></Image>
        </Link>
      </nav>
      <Component {...pageProps} />
     
  
  
  
  </div> );
}
export default MyApp;