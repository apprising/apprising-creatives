"use client";
import React, { useEffect } from "react";
import Link from "next/link";
//= Scripts
import cardMouseEffect from "@/common/cardMouseEffect";

function Services3() {
  useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
  }, []);

  return (
    <section className="feat sub-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                We will be with you all the way!
              </h6>
              <h3 className="wow color-font">
                Choose which journey you will take.
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <h5>Web Design and Development</h5>
              <p>
                We create quality websites that convert, not like other
                companies where they only focus on design.
              </p>
              <Link href="/contact" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items active md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <h5>Mobile App Design and Development</h5>
              <p>
                We create apps that are user-friendly and optimized for your
                goal, making sure it is worth every dime.
              </p>
              <Link href="/contact" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <h5>Systems and Technology</h5>
              <p>
                We create systems that automate simple tasks, so you can focus
                on the important part of your business which is growing, we
                understand that scaling up is not easy.
              </p>
              <Link href="/contact" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <h5>Cybersecurity Analysis</h5>
              <p>
                Secure your website and app with the latest cybersecurity
                methods and tools needed to navigate the digital world, we even
                provide training and evaluations.
              </p>
              <Link href="/contact" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services3;
