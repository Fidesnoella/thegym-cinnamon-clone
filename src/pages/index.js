import Head from 'next/head'
import Image from 'next/image'
import Team from '../components/HomePage/Team'
import Services from '../components/Section/Services/Service'
import Ping from '../components/HomePage/Ping'
import Footer from '../components/Layout/Footer'
import AboutUs from '../components/HomePage/AboutUs'
import Project from '../components/Section/Project'
import Products from '../components/Section/Products'
import Hero from '../components/ui/Hero'
import Tech from '../components/cards/Tech'


export default function Home() {
  return (
    <>
    <Hero />
    <Products />
    <Services />
    <Team />
    <Ping />
    <AboutUs />
    <Tech />
    <Project />
    <Footer />
   </>
  )
}
