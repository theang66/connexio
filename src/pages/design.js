import React from "react"
import { Helmet } from "react-helmet"
import "tachyons"

import SEO from "../components/seo"
import "../components/index.css"
import "../components/layout.css"

import allPosts from "../images/AllPosts.png"
import events from "../images/Events.png"
import map from "../images/Map.png"
import newPost from "../images/NewPost.png"
import newEvent from "../images/NewEvent.png"
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
      <p>Our initial paper prototype consisted of two main tabs, Feed and Events.</p>
      <div class="carousel">
        <img alt="Initial Feed Screen" src={firstFeed} class="proto_img" height="95%" />
        <img alt="Initial Events Screen" src={firstEvents} class="proto_img" height="95%" />
      </div>
    </div>
    <div class="tc">
      <code class="b">Second Paper Prototype</code>
      <p>We made substantial changes to our initial paper prototype to both address design issues
        from usability testing and differentiate the app from existing platforms.</p>
      <div class="carousel">
        <img alt="Second Menu Screen" src={secondMenu} class="proto_img" height="480px" />
        <img alt="Second Events Screen" src={secondEvents} class="proto_img" height="480px" />
        <img alt="Second Poll Screen" src={secondPoll} class="proto_img" height="480px" />
        <img alt="Second Map Screen" src={secondMap} class="proto_img" height="480px" />
      </div>
    </div>
    <div class="tc">
      <code class="b">Digital Mockup</code>
      <p>Our final digital mockup includes the main tabs: Home (with All Posts),
        Events, Discussion, and Map.</p>
      <div class="carousel">
        <img alt="All Posts Screen" src={allPosts} class="proto_img" height="100%" />
        <img alt="Events Screen" src={events} class="proto_img" height="100%" />
        <img alt="Discussion Screen" src={discussion} class="proto_img" height="100%" />
        <img alt="Map Screen" src={map} class="proto_img" height="100%" />
      </div>
    </div>
  </div>
</div>
)

export default DesignPage
