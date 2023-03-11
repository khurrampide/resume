import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import About from '../components/about'
import Skills from '../components/skills'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <header >
      <Navbar/>
    </header>    
    <main>
      <Hero/>
      <About  />
      <Skills/>
    </main>

    </>
  )
}
