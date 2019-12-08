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
    <p class="tc">Connexio provides a platform for <b>cultural learning</b> on Macalester campus.</p>
      <div class="flex justify-around">
        <div class="tc pa3">
        <code class="b">SHARE</code>
        <p>Post about your own cultural experiences using pictures, videos, or text.
        Share with other users in real-time, and include your location if you
        want your post to show up on our map.</p>
        </div>
        <div class="tc pa3">
        <code class="b">ENGAGE</code>
        <p>We've made it easier for you to find information about campus cultural events
        by creating one central calendar. Post about events happening
        in the Macalester community, and RSVP to ones
        that you're interested in.</p>
        </div>
      </div>
    <h1 class="tc">Task 1</h1>
    <p> Our first task is to aggregate and share the event information among our users.
    As stated in the interview themes before, most students, despite wanting to participate
    in cultural events, have a hard time finding the information. At the present, students
    would have to find cultural events by scouring the Mac Daily, departments, and different
    mailing lists. We are going to make it easier to find cultural events by an events tab that
    lists events in chronological order which allows students to search for events and plan
    ahead for their schedules. Providing this aggregated event information will significantly
    help students save their time finding events and join the events to further connect with
    other students who are interested in the same culture. Besides, cultural clubs, organizations,
    and departments can benefit by having a clear central platform through which they can reach
    out to students. The storyboard below shows the feature of sharing the events information
    assists students to join in the events and assists organizers to attract more participants.
    The event organizer is able to publicize by creating an event in the app with relevant
    details (location, time, description, attractions such as food or music). The student is able
    to see this event posting and either share with their friends or RSVP so that the event
    organizer knows roughly who or how many people to expect. This allows the event to gain
    attendance via the centralized posting, and allows students to find events that they are
    interested in far more easily than they would with the existing channels of communication.
    </p>
    <img src={require(`../images/Task1-Storyboard.jpg`)}/>
    <h1 class="tc">Task 2</h1>
    <p>
    The second main task we wanted to support was the creation of a feed for all cultural events
    happening on campus. The feed would allow users to post pictures or updates to a feed accessible
    by all users of the app to share their experiences at cultural events or any other culture
    experiences that users might be having. The feed would have options for pictures, texts, and
    videos, and would have a time stamp and a comments section where users could interact with feed
    posts to engage or get more information about a culture or event. This storyboard shows the
    power a feed would have in this app to pull in more attendees as an event goes on, and to also
    allow culture learning among users who may not have been able to attend the event at all. The
    person at the event is able to post a picture of the food they are eating at an event, and
    another user is able to see that post and be inspired to attend the event and learn more. The
    comments section in the third panel shows other impacts of these posts: namely, the cultural
    learning possibilities, the community support, and the long-term accrual of an audience for
    cultural events and orgs through their feed posts. Overall, this storyboard shows how the task
    of creating a feed can boost cultural learning by increasing immediate attendance, long-term
    attendance, digital community building around cultural learning at Macalester, and creating a
    capacity through which users can do campus cultural learning even if they cannot attend events
    in person.
    </p>
    <img src={require(`../images/Task2-Storyboard.jpg`)}/>
    <h1 class="tc">Video Storyboard</h1>
    <h1 class="tc">Design Process</h1>
    <div class="tc">
    <code class="b">First Paper Prototype</code>
    </div>
    <div class="tc">
    <code class="b">Second Paper Prototype</code>
    </div>
    <div class="tc">
    <code class="b">Digital Mockup</code>
    </div>
    <h1 class="tc">Reports and Presentation</h1>
    <h1 class="tc">Team Members</h1>
    <div class="flex justify-around">
    <a href="https://github.com/theang66" style={{ "text-decoration": "none", "color": "blue" }}>Anh Nguyen</a>
    <a href="https://github.com/ksievert" style={{ "text-decoration": "none", "color": "blue" }}>Katia Sievert</a>
    <a href="https://github.com/YipingZhong" style={{ "text-decoration": "none", "color": "blue" }}>Yiping Zhong</a>
    <a href="https://github.com/ZainMahmoodC" style={{ "text-decoration": "none", "color": "blue" }}>Zain Chaudhry</a>
    </div>
  </Layout>
)

export default IndexPage
