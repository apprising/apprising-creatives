import React from "react";
import projects from "../../data/showcase1.json";

function Footer({ hideBGCOLOR }) {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Office Address</h6>
                    <p>
                      Dela Torre Compound, Dawis Street, Tabunoc, Talisay City
                      Cebu Philippines 6045
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>apprising.creatives@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+63 920 478 6075</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent Works</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <a href="https://apprising-dashboard.vercel.app/">
                      <img
                        src="/img/portfolio/portfolio/1/Demo-Dash.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="sm-post">
                    <a href="">
                      <p>Full Admin Dashboard</p>
                      <span className="date">28 Jan 2024</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div>
                <img src="/img/logowithtext.svg" alt="logo" />
              </div>
              <div className="social">
                <a href="https://www.facebook.com/apprisingcreatives">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.linkedin.com/company/apprising-creatives/?viewAsMember=true">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2024, Created to help by
                  <a href="#0">Apprising Creatives</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
