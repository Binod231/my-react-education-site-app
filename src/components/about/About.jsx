import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Our Agency Story"
              subtitle="Check out our company story and work process"
            />

            <p>
              {" "}
              Each challenge is different and so is our strategy. Our 360​​°
              model guarantees the development of innovative and effective
              marketing strategies that have the power to transform your brand.
              We are expert consultants and can help with strategy, project
              design/development, and income-centered marketing with the best
              tools. We analyze and propose personalized solutions to produce
              results that push growth as far as possible.
            </p>
            <button className="btn2">More About Us</button>
          </div>
          <div className="right row">
            <img src="./immio.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
