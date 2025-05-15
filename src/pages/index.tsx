import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout/Layout"
import Navbar from "../components/sections/Navbar"
import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Projects from "../components/sections/Projects"
import Skills from "../components/sections/Skills"
import Footer from "../components/sections/Footer"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Nate Kane | Portfolio</title>
