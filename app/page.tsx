'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import About from '../components/about'
import Skills from '../components/skills'
import Work from '../components/work'
import Contact from '../components/contact'
import Footer from '../components/footer'
import { useState } from 'react'
import Sidebar from '../components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isOpen,setIsOpen] = useState(false);
  const toggleSidebar = ()=>{
    setIsOpen(!isOpen);
  }

  return (
    <>
    <header >
      <Navbar />
    </header>    
    <main>
      {/* <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} /> */}
      <Hero/>
      <About  />
      <Skills/>
      <Work/>
      <Contact/>
    </main>
    <footer>
      <Footer/>
    </footer>

    </>
  )
}
