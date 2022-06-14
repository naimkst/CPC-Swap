import '../styles/globals.css'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { ethers } from 'ethers'

// const getLibrary = (provider: any) => {
//   // return new Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
//   return new ethers.providers.Web3Provider(provider)
// }


const getLibrary = (provider: any) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
};



function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Web3ReactProvider getLibrary={getLibrary}>
      <Layout><Component {...pageProps} /></Layout>
    </Web3ReactProvider>
  ) 
}

export default MyApp
