import React from "react";

import "./index.scss";

const AboutPage = () => (
  <div className="about-page-wrapper page-wrapper">
    <main className="about-page-main">
      <h1 className="about-page-main__title about-page-main__item">
        About Post Board
      </h1>
      <h2 className="about-page-main__desc about-page-main__item">
        {`Project Setup
  · bootstrapped project with Create React App
  · ejected Create React App to integrate SCSS and other custom webpack settings
\n
  External Libraries
  · eslint, prettier
    · standardize coding format
  · uuid
    · generate id for post & comments
  · moment.js
    · format datetime
  · react-router-dom
    · support for single page application
  · redux, react-redux
    · support for global store
\n
Implementation Highlights
  · mobile first approach responsive design
  · client side form validation
  · entire layout implemented only in CSS without any use of external libraries
  · abstracted repetitive component structures and stylings into reusable modules`}
      </h2>
    </main>
  </div>
);

export default AboutPage;
