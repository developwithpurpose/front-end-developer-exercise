import React from "react";
import BabyStep1 from "./components/BabyStep1";
import BabyStep2 from "./components/BabyStep2";
import BabyStep3 from "./components/BabyStep3";
import BabyStep4 from "./components/BabyStep4";
import BabyStep5 from "./components/BabyStep5";
import BabyStep6 from "./components/BabyStep6";
import BabyStep7 from "./components/BabyStep7";
import shadow_left from "./assets/images/shadow_left.jpg";
import header_text from "./assets/images/header_text.jpg";
import nav_img1 from "./assets/images/icons/individual/icons_small_bs1.png";
import nav_img2 from "./assets/images/icons/individual/icons_small_bs2.png";
import nav_img3 from "./assets/images/icons/individual/icons_small_bs3.png";
import nav_img4 from "./assets/images/icons/individual/icons_small_bs4.png";
import nav_img5 from "./assets/images/icons/individual/icons_small_bs5.png";
import nav_img6 from "./assets/images/icons/individual/icons_small_bs6.png";
import nav_img7 from "./assets/images/icons/individual/icons_small_bs7.png";
import nav_border from "./assets/images/shadow_left_nav.jpg";
import col from "./assets/images/shadow_right.jpg";
import row from "./assets/images/shadow_bottom.jpg";
import "./App.css";

// import PersonList from "./components/PersonList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Ramsey Solutions Rocks!!</p>
        <div className="container centered fill-height">
          <div className="row fill-height">
            <div className="col fill-height">
              <img src={shadow_left} className="border" alt="border" />
            </div>
            <div className="col from-top fill-height">
              <div className="container fill-height" id="site-container">
                <div className="row">
                  <div className="col">
                    <img
                      src={header_text}
                      className="header_text"
                      alt="header_text"
                    />
                  </div>
                </div>
                <div className="row fill-height">
                  <div className="col fill-height">
                    <div className="container fill-height" id="main-container">
                      <div className="row fill-height">
                        <div className="col fill-height">
                          <div
                            className="container fill-height"
                            id="nav-container"
                          >
                            <div className="row">
                              <div className="col">
                                <a
                                  className="nav-link container"
                                  href="#step-1"
                                >
                                  <div className="row">
                                    <div className="col nav-item">
                                      Baby Step 1
                                    </div>
                                    <div className="col nav-img-div">
                                      <img
                                        src={nav_img1}
                                        className="nav_img"
                                        alt="nav_img"
                                      />
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <BabyStep1 />
                            </div>
                            <div className="row">
                              <div className="col">
                                <a
                                  className="nav-link container"
                                  href="#step-2"
                                >
                                  <div className="row">
                                    <div className="col nav-item">
                                      Baby Step 2
                                    </div>
                                    <div className="col nav-img-div">
                                      <img
                                        src={nav_img2}
                                        className="nav_img"
                                        alt="nav_img"
                                      />
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <BabyStep2 />
                            </div>
                            <div className="row">
                              <div className="col">
                                <a
                                  className="nav-link container"
                                  href="#step-3"
                                >
                                  <div className="row">
                                    <div className="col nav-item">
                                      Baby Step 3
                                    </div>
                                    <div className="col nav-img-div">
                                      <img
                                        src={nav_img3}
                                        className="nav_img"
                                        alt="nav_img"
                                      />
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <BabyStep3 />
                            </div>
                            <div className="row">
                              <div className="col">
                                <a
                                  className="nav-link container"
                                  href="#step-4"
                                >
                                  <div className="row">
                                    <div className="col nav-item">
                                      Baby Step 4
                                    </div>
                                    <div className="col nav-img-div">
                                      <img
                                        src={nav_img4}
                                        className="nav_img"
                                        alt="nav_img"
                                      />
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <BabyStep4 />
                            </div>
                            <div className="row">
                              <div className="col">
                                <a
                                  className="nav-link container"
                                  href="#step-5"
                                >
                                  <div className="row">
                                    <div className="col nav-item">
                                      Baby Step 5
                                    </div>
                                    <div className="col nav-img-div">
                                      <img
                                        src={nav_img5}
                                        className="nav_img"
                                        alt="nav_img"
                                      />
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <BabyStep5 />
                            </div>
                            <div className="row">
                              <div className="col">
                                <a
                                  className="nav-link container"
                                  href="#step-6"
                                >
                                  <div className="row">
                                    <div className="col nav-item">
                                      Baby Step 6
                                    </div>
                                    <div className="col nav-img-div">
                                      <img
                                        src={nav_img6}
                                        className="nav_img"
                                        alt="nav_img"
                                      />
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <BabyStep6 />
                            </div>
                            <div className="row">
                              <div className="col">
                                <a
                                  className="nav-link container"
                                  href="#step-7"
                                >
                                  <div className="row">
                                    <div className="col nav-item">
                                      Baby Step 7
                                    </div>
                                    <div className="col nav-img-div">
                                      <img
                                        src={nav_img7}
                                        className="nav_img"
                                        alt="nav_img"
                                      />
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <BabyStep7 />
                            </div>
                            <div className="row fill-height">
                              <div className="col">
                                <img
                                  src={nav_border}
                                  className="nav_border"
                                  alt="nav_border"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col fill-height"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <img src={col} className="border" alt="col" />
            </div>
          </div>
          <div className="row">
            <div className="col"></div>
            <img src={row} className="row" alt="row" />
          </div>
          <div className="col"></div>
          <div class="col">
            <img src={col} className="col" alt="col" />
          </div>
          <div class="col"></div>
        </div>
        <script src="./assets/javascripts/index.js"></script>
      </header>
    </div>
  );
}

export default App;
