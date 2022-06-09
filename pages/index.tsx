import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Data from '../components/Home/data'
import Hero from '../components/Home/hero'
import Sourch from '../components/Home/sourch'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Sourch />
      <Data/>
    </>
  )
}

export default Home
