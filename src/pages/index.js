import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ShopCard from "../components/shopCard"

const PromoText = styled.h1`
  font-weight: 300;
  font-size: 1.4em;
  text-align: center;
`

const ObliqueMarking = styled.div`
  width: 300px;
  height: 50px;
  background-color: #0ad266;
  transform: rotate(-2deg);
  margin: 0 auto;
  h2 {
    position: absolute;
    top: -30px;
    left: 10px;
    font-weight: 500;
    font-size: 2.5em;
    text-align: center;
    transform: rotate(2deg);
  }
`

const Grid = styled.section`
  display: grid;
  grid-row-gap: 100px;
  grid-template-columns: repeat(2, auto);
  justify-items: center;
  padding: 0 300px;
  margin: 100px 0 100px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="INDEXLOL" />
    <PromoText>Wij rekenen nooit verzendkosten aan!</PromoText>
    <Image />
    <ObliqueMarking>
      <h2>Nieuw dit seizoen</h2>
    </ObliqueMarking>
    <Grid>
      <ShopCard />
    </Grid>
  </Layout>
)

export default IndexPage
