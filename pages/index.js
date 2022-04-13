import Head from 'next/head'
import Image from 'next/image'
import AboutUs from '../components/AboutUs'
import Banner from '../components/Banner'
import WhatWeDo from '../components/WhatWeDo'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Banner />
      <WhatWeDo />
      

      <AboutUs />

    </>
    
  )
  
}

