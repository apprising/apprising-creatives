"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
//= Scripts
import { handleDropdown, handleMobileDropdown } from "@/common/navbar";
//= Static Data
import Image from "next/image";
import Logo from "../../../public/img/logowithtext.svg";

const Navbar = ({ lr, theme }) => {
  const navbar = useRef();

  function handleScroll() {
    if (window.scrollY > 300) {
      navbar.current.classList.add("nav-scroll");
    } else {
      navbar.current.classList.remove("nav-scroll");
    }
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      ref={navbar}
      className={`navbar navbar-expand-lg change ${
        theme === "light" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <Image src={Logo} alt="apprising logo" width={500} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={`/about`}>
                About Us
              </Link>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Works
              </span>
              <div className="dropdown-menu">
                <a className="dropdown-item" href={`/showcase/showcase-dark`}>
                  Showcase Parallax
                </a>
                <a className="dropdown-item" href={`/showcase4/showcase4-dark`}>
                  Showcase Carousel
                </a>
                <a className="dropdown-item" href={`/showcase3/showcase3-dark`}>
                  Showcase Circle
                </a>
                <a className="dropdown-item" href={`/works/works-dark`}>
                  Portfolio Masonry
                </a>
                <a className="dropdown-item" href={`/works2/works2-dark`}>
                  Portfolio Filtering
                </a>
                <a className="dropdown-item" href={`/works3/works3-dark`}>
                  Portfolio Gallery
                </a>
              </div>
            </li>

            <li className="nav-item">
              <Link href={`/contact`} className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
