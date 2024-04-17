"use client";
import React, { useEffect } from "react";
//= Scripts
import thumparallaxDown from "@/common/thumparallaxDown";

function MinimalArea1() {
  useEffect(() => {
    thumparallaxDown();
  }, []);

  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/rideofyourlife.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">About us.</h4>
              <p className="wow txt" data-splitting>
                We are a group of innovative developers whose purpose is to help
                business owners like you transition to the digital world as fast
                and easy as possible.
              </p>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Our Vision
                  </h6>
                  <p>
                    To be the guiding light in the digital realm, empowering
                    businesses to navigate and thrive in an ever-evolving
                    landscape.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> Our Mission
                  </h6>
                  <p>
                    Our mission at Apprising Creatives is to create tailored web
                    applications that empower businesses to thrive in the
                    digital landscape. Through innovation, collaboration, and a
                    commitment to excellence, we guide our clients towards
                    success, one digital solution at a time.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Why Us?
                  </h6>
                  <p>
                    Your business, empowered by a custom-crafted web
                    application, sailing effortlessly across the digital seas.
                    With our team of skilled navigators at the helm, we'll steer
                    your ship toward new horizons, ensuring smooth sailing every
                    step of the way. <br></br>But this isn't just any
                    voyage—it's a personalized expedition tailored to your
                    unique needs and aspirations. From the moment you step foot
                    on deck, we're committed to understanding your vision and
                    bringing it to life with precision and flair.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MinimalArea1;
