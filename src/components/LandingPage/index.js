import React from "react";
import "./index.scss";

const LandingPage = () => (
  <div className="landing-page-wrapper page-wrapper">
    <main className="landing-page-main">
      <section className="landing-page-header">
        <h1 className="landing-page-header__title landing-page-header__title">
          Welcome to Post Board!
        </h1>
        <h2 className="landing-page-header__desc">
          There are currently 0 posts
        </h2>
      </section>
      <section className="landing-page-body">post list</section>
    </main>
  </div>
);

export default LandingPage;
