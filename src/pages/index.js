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
import newPost from "../images/NewPost.png"
import newEvent from "../images/NewEvent.png"

const IndexPage = () => (
  <div>
    <SEO title="Connexio Project" />
    <Helmet>
      <title>Connexio Project</title>
    </Helmet>
    <header class="b" style={{
          background: `#EE5454`,
          marginBottom: `1.45rem`,
          fontSize: `60px`,
          color: `white`,
          textAlign: `center`,
          paddingTop: `30px`,
          paddingLeft: `2rem`,
          paddingBottom: `30px`,
          fontFamily: `monospace`,
        }}>Connexio</header>
    <div style={{ margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 0, }}>
      <h1 class="tc" id="Overview">Overview</h1>
      <p class="tc"><b>Cultural learning at the touch of a button.</b> <br />
      Connexio provides a platform for cross-cultural interactions on Macalester campus.
      No more disparate email lists or echo chambers. Find out about upcoming cultural events
      and the cultural stories of your peers all in one place.</p>
      <div class="flex items-center">
        <div class="tc pa3">
          <code class="b">SHARE</code>
          <p>Post about your own cultural experiences using pictures, videos, or text.
            Share with other users in real-time, and include your location if you
            want your post to show up on our map.</p>
          <img alt="All Posts Screen" src={allPosts} width="80%" height="75%" />
        </div>
        <div class="tc pa3">
          <code class="b">ENGAGE</code>
          <p>We've made it easier for you to find information about campus cultural events
            by creating one central calendar. Post about events happening
            in the Macalester community, and RSVP to ones
            that you're interested in.</p>
          <img alt="Events Screen" src={events} width="68%" height="73%" />
        </div>
      </div>
      <h1 class="tc" id="VideoStoryboard">Video Storyboard</h1>
      <iframe width="100%" height="500" title="Connexio Video Storyboard"
        style={{ "border": "none", "margin": "auto" }}
        src="https://www.youtube.com/embed/Apnh1uLJ7yc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      &nbsp;&nbsp;&nbsp;
      <h1 class="tc" id="Tasks">Task 1: Post to a Feed</h1>
      <p class="tc">
        Post pictures, videos, and texts to share your experiences with the Macalester community. <br />
        Posts with location (optional) will show up on the Map.
      </p>
      <div class="carousel tc">
        <img alt="All Posts Screen" src={allPosts} class="proto_img" height="100%" />
        <img alt="Map Screen" src={map} class="proto_img" height="100%" />
        <img alt="New Post Pop-up" src={newPost} class="proto_img" height="100%" />
      </div>
      &nbsp;&nbsp;&nbsp;
      <h1 class="tc">Task 2: Create and view events</h1>
      <p class="tc">
        Events are aggregated in the Events tab and visible to the Macalester community. <br />
        View event details, RSVP, and create new events.
      </p>
      <div class="carousel tc">
        <img alt="Events Screen" src={events} class="proto_img" height="100%" />
        <img alt="New Event Pop-up" src={newEvent} class="proto_img" height="100%" />
      </div>
      &nbsp;&nbsp;&nbsp;
      <h1 class="tc" id="Demo">Demo</h1>
      <h3 class="tc">Try me!</h3>
      <iframe style={{ "border": "none", "margin": "auto" }} width="100%" height="500" title="Connexio Demo"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F2oM40LGvmfUwIr2MDqmktP%2FConnexio%3Fnode-id%3D43%253A219%26scaling%3Dscale-down"
        allowfullscreen></iframe>
      &nbsp;&nbsp;&nbsp;
      <h1 class="tc" id="DesignProcess">Design Process</h1>
      <h4 class="tc">Click <Link to="/design" style={{ "text-decoration": "none", "color": "blue" }}>here </Link>
        to learn more about our design process!</h4>
      &nbsp;&nbsp;&nbsp;
      <h1 class="tc" id="Reports">Reports and Presentation</h1>
      <h4 class="tc"><a style={{ "text-decoration": "none", "color": "blue" }} href="https://docs.google.com/document/d/1vYLuzBvjI3ywbHjIGiuoUdng9jSnKi3kZDfq1z-rm6o/edit?usp=sharing">
          Interviews, Task Analysis & Storyboards</a></h4>
      <h4 class="tc"><a style={{ "text-decoration": "none", "color": "blue" }} href="https://docs.google.com/document/d/1pLLhXRfOR837rEYpH5pdamhNvoVjwvRY2Hkzw0T07is/edit?usp=sharing">
          Paper Prototypes, Usability Testing & Digital Mockup</a></h4>
      <h4 class="tc"><a style={{ "text-decoration": "none", "color": "blue" }} href="https://docs.google.com/presentation/d/138iPg25G5Jp3nPtn2WD1kHlt91oS9FVWV9eFqt97VhM/edit?usp=sharing">
          Presentation</a></h4>
      &nbsp;&nbsp;&nbsp;
      <h1 class="tc" id="Members">Team Members</h1>
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
