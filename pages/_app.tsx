import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";


// This is the chain your dApp will work on.
const activeChain = ChainId.AvalancheFujiTestnet

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Head>
        <title>thirdweb Edition Drop Minting Customizable Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn How To Use Thirdweb's Edition Drop contract and create a customizable Edition Drop minting page"
        />
        <meta
          name="keywords"
          content="Thirdweb, thirdweb Edition drop, how to make thirdweb nft drop, how to make nft collection thirdweb"
        />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      {/* <ThirdwebGuideFooter /> */}
      <Footer/>
    </ThirdwebProvider>
  );
}

export default MyApp;
