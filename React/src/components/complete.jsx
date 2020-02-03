import React, { Component } from "react";
import ArticlesParent from "./ArticlesParent";
import Sidebar from "./Sidebar";
class Complete extends Component {
  state = {};
  render() {
    console.log("in complete: " +this.props.login_user)
    return (
      <div className="is-preload">
        <div id="wrapper">
          <div id="main">
            <div className="inner">
              <header id="header">
                <a href="index.html" className="logo">
                  <h2>
                    {" "}
                    <strong>Farmers</strong> Portal
                  </h2>
                </a>
                <ul className="icons">
                  <li>
                    <a href="#" className="icon brands fa-twitter">
                      <span className="label">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon brands fa-facebook-f">
                      <span className="label">Facebook</span>
                    </a>
                  </li>
                </ul>
              </header>

              <section id="banner">
                <div className="content">
                  <header>
                    <h1>About Us</h1>
                    <br></br>
                    <p>
                      A simple and interactive website for farmers and customers
                      alike :)
                    </p>
                  </header>
                  <p>
                    The major agricultural products can be broadly grouped into
                    foods, fibers, fuels and raw materials (such as rubber).
                    Food classes include cereals (grains), vegetables, fruits,
                    oils, meat, milk, fungi and eggs. Over one-third of the
                    world's workers are employed in agriculture, second only to
                    the service sector, although the number of agricultural
                    workers in developed countries has decreased significantly
                    over the centuries.
                  </p>
                  <ul className="actions">
                    <li>
                      <a
                        href="https://en.wikipedia.org/wiki/Portal:Agriculture"
                        target="blank"
                        className="button big"
                      >
                        Learn More
                      </a>
                    </li>
                  </ul>
                </div>
                <span className="image object">
                  <img src={require("../images/kisan.jpg")} alt="" />
                </span>
              </section>

              <section>
                <header className="major">
                  <h2>Buyer Proposals</h2>
                </header>
                <ArticlesParent login_user={this.props.login_user} />
              </section>

              <section>
                <header className="major">
                  <h2>Seller Proposals</h2>
                </header>
                <ArticlesParent login_user={this.props.login_user}/>
              </section>

              <section>
                <header className="major">
                  <h2>Ipsum sed dolor</h2>
                </header>
                <div className="posts">
                  <article>
                    <a href="#" className="image">
                      <img src={require("../images/pic01.jpg")} alt="" />
                    </a>
                    <h3>Interdum aenean</h3>
                    <p>
                      Aenean ornare velit lacus, ac varius enim lorem
                      ullamcorper dolore. Proin aliquam facilisis ante interdum.
                      Sed nulla amet lorem feugiat tempus aliquam.
                    </p>
                    <ul className="actions">
                      <li>
                        <a href="#" className="button">
                          More
                        </a>
                      </li>
                    </ul>
                  </article>
                  <article>
                    <a href="#" className="image">
                      <img src={require("../images/pic02.jpg")} alt="" />
                    </a>
                    <h3>Nulla amet dolore</h3>
                    <p>
                      Aenean ornare velit lacus, ac varius enim lorem
                      ullamcorper dolore. Proin aliquam facilisis ante interdum.
                      Sed nulla amet lorem feugiat tempus aliquam.
                    </p>
                    <ul className="actions">
                      <li>
                        <a href="#" className="button">
                          More
                        </a>
                      </li>
                    </ul>
                  </article>
                  <article>
                    <a href="#" className="image">
                      <img src={require("../images/pic03.jpg")} alt="" />
                    </a>
                    <h3>Tempus ullamcorper</h3>
                    <p>
                      Aenean ornare velit lacus, ac varius enim lorem
                      ullamcorper dolore. Proin aliquam facilisis ante interdum.
                      Sed nulla amet lorem feugiat tempus aliquam.
                    </p>
                    <ul className="actions">
                      <li>
                        <a href="#" className="button">
                          More
                        </a>
                      </li>
                    </ul>
                  </article>
                  <article>
                    <a href="#" className="image">
                      <img src={require("../images/pic04.jpg")} alt="" />
                    </a>
                    <h3>Sed etiam facilis</h3>
                    <p>
                      Aenean ornare velit lacus, ac varius enim lorem
                      ullamcorper dolore. Proin aliquam facilisis ante interdum.
                      Sed nulla amet lorem feugiat tempus aliquam.
                    </p>
                    <ul className="actions">
                      <li>
                        <a href="#" className="button">
                          More
                        </a>
                      </li>
                    </ul>
                  </article>
                  <article>
                    <a href="#" className="image">
                      <img src={require("../images/pic05.jpg")} alt="" />
                    </a>
                    <h3>Feugiat lorem aenean</h3>
                    <p>
                      Aenean ornare velit lacus, ac varius enim lorem
                      ullamcorper dolore. Proin aliquam facilisis ante interdum.
                      Sed nulla amet lorem feugiat tempus aliquam.
                    </p>
                    <ul className="actions">
                      <li>
                        <a href="#" className="button">
                          More
                        </a>
                      </li>
                    </ul>
                  </article>
                  <article>
                    <a href="#" className="image">
                      <img src={require("../images/pic06.jpg")} alt="" />
                    </a>
                    <h3>Amet varius aliquam</h3>
                    <p>
                      Aenean ornare velit lacus, ac varius enim lorem
                      ullamcorper dolore. Proin aliquam facilisis ante interdum.
                      Sed nulla amet lorem feugiat tempus aliquam.
                    </p>
                    <ul className="actions">
                      <li>
                        <a href="#" className="button">
                          More
                        </a>
                      </li>
                    </ul>
                  </article>
                </div>
              </section>
            </div>
          </div>

          <Sidebar />
        </div>
      </div>
    );
  }
}

export default Complete;
