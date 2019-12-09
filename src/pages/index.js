import React from "react"
import "tachyons"

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
import video from "../images/Video.png"

const IndexPage = () => (
<div>
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
    <h1 class="tc">Overview</h1>
    <p class="tc">Connexio provides a platform for <b>cultural learning</b> on Macalester campus.</p>
    <div class="flex justify-around">
      <div class="tc pa3">
        <code class="b">SHARE</code>
        <p>Post about your own cultural experiences using pictures, videos, or text.
          Share with other users in real-time, and include your location if you
          want your post to show up on our map.</p>
        <img src={allPosts} width="80%" height="75%" />
      </div>
      <div class="tc pa3">
        <code class="b">ENGAGE</code>
        <p>We've made it easier for you to find information about campus cultural events
          by creating one central calendar. Post about events happening
          in the Macalester community, and RSVP to ones
          that you're interested in.</p>
        <img src={events} width="65%" height="75%" />
      </div>
    </div>
    <h1 class="tc">Task 1: Post to a Feed</h1>
    <p class="tc">
      Post pictures, videos, and texts to share your experiences with the Macalester community. <br />
      Posts with location (optional) will show up on the Map.
    </p>
    <div class="carousel tc">
      <img src={allPosts} class="proto_img" height="100%" />
      <img src={map} class="proto_img" height="100%" />
      <img src={newPost} class="proto_img" height="100%" />
    </div>
    <h1 class="tc">Task 2: Create and view events</h1>
    <p class="tc">
      Events are aggregated in the Events tab and visible to the Macalester community. <br />
      View event details, RSVP, and create new events.
    </p>
    <div class="carousel tc">
      <img src={events} class="proto_img" height="100%" />
      <img src={newEvent} class="proto_img" height="100%" />
    </div>
    <h1 class="tc">Demo</h1>
    <iframe style={{ "border": "none" }} width="800" height="450"
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F2oM40LGvmfUwIr2MDqmktP%2FConnexio%3Fnode-id%3D95%253A49%26scaling%3Dscale-down"
      allowfullscreen></iframe>
    <h1 class="tc">Video Storyboard</h1>
    <div class="tc">
      <img src={video} class="proto_img" />
    </div>
    <h1 class="tc">Design Process</h1>
    <div class="tc">
      <code class="b">First Paper Prototype</code>
      <p>Our initial paper prototype consisted of two main tabs, Feed and Events.</p>
      <div class="carousel">
        <img src={firstFeed} class="proto_img" height="95%" />
        <img src={firstEvents} class="proto_img" height="95%" />
      </div>
    </div>
    <div class="tc">
      <code class="b">Second Paper Prototype</code>
      <p>We made substantial changes to our initial paper prototype to both address design issues
        from usability testing and differentiate the app from existing platforms.</p>
      <div class="carousel">
        <img src={secondMenu} class="proto_img" height="480px" />
        <img src={secondEvents} class="proto_img" height="480px" />
        <img src={secondPoll} class="proto_img" height="480px" />
        <img src={secondMap} class="proto_img" height="480px" />
      </div>
    </div>
    <div class="tc">
      <code class="b">Digital Mockup</code>
      <p>Our final digital mockup includes the main tabs: Home (with All Posts),
        Events, Discussion, and Map.</p>
      <div class="carousel">
        <img src={allPosts} class="proto_img" height="100%" />
        <img src={events} class="proto_img" height="100%" />
        <img src={discussion} class="proto_img" height="100%" />
        <img src={map} class="proto_img" height="100%" />
      </div>
    </div>
    <h1 class="tc">Reports and Presentation</h1>
    <h4 class="tc"><a style={{ "text-decoration": "none", "color": "blue" }} href="https://docs.google.com/document/d/1vYLuzBvjI3ywbHjIGiuoUdng9jSnKi3kZDfq1z-rm6o/edit?usp=sharing">
        Interviews, Task Analysis & Storyboards</a></h4>
    <h4 class="tc"><a style={{ "text-decoration": "none", "color": "blue" }} href="https://docs.google.com/document/d/1pLLhXRfOR837rEYpH5pdamhNvoVjwvRY2Hkzw0T07is/edit?usp=sharing">
        Paper Prototypes, Usability Testing & Digital Mockup</a></h4>
    <h4 class="tc"><a style={{ "text-decoration": "none", "color": "blue" }} href="https://docs.google.com/presentation/d/138iPg25G5Jp3nPtn2WD1kHlt91oS9FVWV9eFqt97VhM/edit?usp=sharing">
        Presentation</a></h4>
    <h1 class="tc">Team Members</h1>
    <div class="flex justify-around">
      <h4><a href="https://github.com/theang66" style={{ "text-decoration": "none", "color": "blue" }}>
          Anh Nguyen</a></h4>
      <h4><a href="https://github.com/ksievert" style={{ "text-decoration": "none", "color": "blue" }}>
          Katia Sievert</a></h4>
      <h4><a href="https://github.com/YipingZhong" style={{ "text-decoration": "none", "color": "blue" }}>
          Yiping Zhong</a></h4>
      <h4><a href="https://github.com/ZainMahmoodC" style={{ "text-decoration": "none", "color": "blue" }}>
          Zain Chaudhry</a></h4>
    </div>
  </div>
</div>
)

export default IndexPage
