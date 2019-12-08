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
    <p> Our first task is to aggregate and share the event information among our users. We are going
    to make it easier to find cultural events by an events tab that lists events in chronological
    order which allows students to search for events and plan ahead for their schedules.
    </p>
    <div class = "carousel">
        <img src={require(`../images/4 - events.png`)} class="proto_img" />
        <img src={require(`../images/4.5 - events NEW.png`)} class="proto_img"/>
    </div>
    <img src={require(`../images/Task1-Storyboard.jpg`)}/>
    <h1 class="tc">Task 2</h1>
    <p>
    The second main task we wanted to support was the creation of a feed for all cultural events
    happening on campus. The feed would allow users to post pictures or updates to a feed accessible
    by all users of the app to share their experiences at cultural events or any other culture
    experiences that users might be having.
    </p>
    <div class = "carousel">
        <img src={require(`../images/3 - all posts.png`)} class="proto_img"/>
        <img src={require(`../images/6 - map.png`)} class="proto_img"/>
        <img src={require(`../images/3.5 posts NEW.png`)} class="proto_img"/>
    </div>
    <img src={require(`../images/Task2-Storyboard.jpg`)}/>
    <h1 class="tc">Video Storyboard</h1>
    <h1 class="tc">Design Process</h1>

    <h1 class="tc">Reports and Presentation</h1>
    <p class="tc"><a href="https://docs.google.com/document/d/1vYLuzBvjI3ywbHjIGiuoUdng9jSnKi3kZDfq1z-rm6o/edit?usp=sharing">Assignment2 Report</a></p>
    <p class="tc"><a href="https://docs.google.com/document/d/1pLLhXRfOR837rEYpH5pdamhNvoVjwvRY2Hkzw0T07is/edit?usp=sharing">Assignment3 Report</a></p>
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
