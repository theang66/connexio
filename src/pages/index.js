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
        <div class="tc pa3">
        <code>SHARE</code>
        <p>Post about your own cultural experiences using pictures, videos, or text.
        Share with other users in real-time, and include your location if you
        want your post to show up on our map.</p>
        </div>
        <div class="tc pa3">
        <code>ENGAGE</code>
        <p>We've made it easier for you to find information about campus cultural events
        by creating one central calendar. Post about events happening
        in the Macalester community, and RSVP to ones
        that you're interested in.</p>
        </div>
      </div>
    <h1 class="tc">Task 1</h1>
    <h1 class="tc">Task 2</h1>
    <h1 class="tc">Video Storyboard</h1>
    <h1 class="tc">Design Process</h1>

    <h1 class="tc">Reports and Presentation</h1>
    <h1 class="tc">Team Members</h1>
    <div class="flex justify-around">
    <p class="tc">Anh Nguyen</p>
    <p class="tc">Katia Sievert</p>
    <p class="tc">Yiping Zhong</p>
    <p class="tc">Zain Chaudhry</p>
    </div>

  </Layout>
)

export default IndexPage
