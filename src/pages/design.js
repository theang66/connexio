import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import "tachyons"

import SEO from "../components/seo"
import "../components/index.css"
import "../components/layout.css"

import allPosts from "../images/AllPosts.png"
import events from "../images/Events.png"
import map from "../images/Map.png"
import discussion from "../images/Discussion.png"
import firstFeed from "../images/FirstFeed.png"
import firstEvents from "../images/FirstEvents.png"
import secondMenu from "../images/SecondMenu.png"
import secondEvents from "../images/SecondEvents.png"
import secondPoll from "../images/SecondPoll.png"
import secondMap from "../images/SecondMap.png"

const DesignPage = () => (
  <div>
    <SEO title="Connexio Design Process" />
    <Helmet>
      <title>Connexio Design Process</title>
    </Helmet>
    <header class="b" style={{
          background: `#EE5454`,
          marginBottom: `1.45rem`,
          textAlign: `center`,
          fontSize: `60px`,
          color: `white`,
          paddingTop: `30px`,
          paddingBottom: `30px`,
          fontFamily: `monospace`,
        }}>Connexio</header>
    <div style={{ margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 0, }}>
      <h1 class="tc">Design Process</h1>
      <div class="tc">
        <code class="b">First Paper Prototype</code>
        <p>Our initial paper prototype consisted of two main tabs, Feed and Events. <br />
          In these tabs, you can view posts and events from the Macalester community and add your own!</p>
        <div class="carousel">
          <img alt="Initial Feed Screen" src={firstFeed} class="proto_img" height="95%" />
          <img alt="Initial Events Screen" src={firstEvents} class="proto_img" height="95%" />
        </div>
      </div>
      &nbsp;&nbsp;&nbsp;
      <div class="tc">
        <code class="b">Second Paper Prototype</code>
        <p>We wanted to differentiate our app from existing platforms, so we added Poll and Map screens.
          In Poll, you can ask and answer questions related to culture, and Map gives you a nice
          visualization of where the posts are coming from.</p>
        <div class="carousel">
          <img alt="Second Menu Screen" src={secondMenu} class="proto_img" height="480px" />
          <img alt="Second Events Screen" src={secondEvents} class="proto_img" height="480px" />
          <img alt="Second Poll Screen" src={secondPoll} class="proto_img" height="480px" />
          <img alt="Second Map Screen" src={secondMap} class="proto_img" height="480px" />
        </div>
      </div>
      &nbsp;&nbsp;&nbsp;
      <div class="tc">
        <code class="b">Digital Mockup</code>
        <p>In our final digital mockup, we addressed design issues from our heuristic evaluation,
          cognitive walkthrough, and usability tests. Some big changes are addition of a navigation
          bar and removal of the menu screen.</p>
        <div class="carousel">
          <img alt="All Posts Screen" src={allPosts} class="proto_img" height="100%" />
          <img alt="Events Screen" src={events} class="proto_img" height="100%" />
          <img alt="Discussion Screen" src={discussion} class="proto_img" height="100%" />
          <img alt="Map Screen" src={map} class="proto_img" height="100%" />
        </div>
      </div>
    </div>
    <h3 class="tc">
      <Link to="/" style={{ "text-decoration": "none", "color": "blue" }}>Back to Homepage</Link>
    </h3>
  </div>
)

export default DesignPage
