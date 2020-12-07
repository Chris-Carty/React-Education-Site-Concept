import React from "react"
import { Link } from "gatsby"
import Card from "../components/cards/Card"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"
import Section from "../components/sections/section"
import Section2 from "../components/sections/section2"
import staticdata from "../../staticdata.json"
import Cell from "../components/Cell"
import styled from "styled-components"

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`
const SectionCellGroup = styled.div`
  color: white;
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <div className="Cards">
        <div className="CardGroup">
          <Card
            title="React for Designers"
            text="20 sections"
            image={require("../../public/images/cards/react-chapter.jpg")}
          />
          <Card
            title="Design Systems with Figma"
            text="12 sections"
            image={require("../../public/images/cards/figma.jpg")}
          />
          <Card
            title="Create a Spritekit game"
            text="15 sections"
            image={require("../../public/images/cards/spritekit.jpg")}
          />
          <Card
            title="Build an ARKit 2 app"
            text="10 sections"
            image={require("../../public/images/cards/arkit2.jpg")}
          />
          <Card
            title="Sound Design with Cubase"
            text="11 sections"
            image={require("../../public/images/cards/sound-design.jpg")}
          />
          <Card
            title="Motion Design in After Effects"
            text="15 sections"
            image={require("../../public/images/cards/After_Effects.jpg")}
          />
          <Card
            title="Learn Swift"
            text="15 sections"
            image={require("../../public/images/cards/swift2.jpg")}
          />
          <Card
            title="Swift UI for iOS 14"
            text="10 sections"
            image={require("../../public/images/cards/SwiftUI.jpg")}
          />
          <Card
            title="Learn Sketch"
            text="20 sections"
            image={require("../../public/images/cards/sketch.jpg")}
          />
        </div>
      </div>

      <Section
        image={require("../../public/images/logos/wallpaper2.jpg")}
        logo={require("../../public/images/logos/logo-react.png")}
        title="React for Designers"
        text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
      />

      <SectionCaption>12 Sections - 6 Hours</SectionCaption>
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell title={cell.title} image={cell.image} />
        ))}
      </SectionCellGroup>

      <div class="buttonz">
        <Link to="">
          <button>About React course</button>
        </Link>
      </div>

      <Section2
        image={require("../../public/images/logos/Topography0044.jpg")}
        title2="Design for everyone"
        title3="Coding for designers"
      />
    </Layout>
  )
}

export default IndexPage
