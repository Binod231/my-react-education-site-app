import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle="We offer cost-effective and value-added property advertising
              services to the real estate agencies." />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent;
