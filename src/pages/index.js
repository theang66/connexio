import React from "react"
import { Link } from "gatsby"
import "tachyons"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Connexio" />
    <h1 class="tc">Overview</h1>
    <p class="tc">Connexio provides a platform for cultural learning on Macalester campus.</p>
      <div class="flex justify-around">
        <div class="tc">
        <code>SHARE</code>
        </div>
        <div class="tc">
        <code>ENGAGE</code>
        </div>
      </div>
    <h1 class="tc">Task 1</h1>
    <h1 class="tc">Task 2</h1>
    <h1 class="tc">Video Storyboard</h1>
    <h1 class="tc">Design Process</h1>

    <h1 class="tc">Reports and Presentation</h1>
    <h1 class="tc">Team Members</h1>
    <p class="tc">Anh Nguyen</p>
    <p class="tc">Katia Sievert</p>
    <p class="tc">Yiping Zhong</p>
    <p class="tc">Zain Chaudhry</p>
  </Layout>
)

export default IndexPage
