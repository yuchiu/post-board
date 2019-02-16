import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.scss";
import { Navbar, Footer } from "./common";
import LandingPage from "./LandingPage";
import AboutPage from "./AboutPage";
import NotFoundPage from "./NotFoundPage";
import PostDetailPage from "./PostDetailPage";
import CreatePostPage from "./CreatePostPage";

const Routes = () => (
  <BrowserRouter>
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/create-post" component={CreatePostPage} />
        <Route exact path="/posts/:postId" component={PostDetailPage} />
        <Route exact path="/:unfoundLocation" component={NotFoundPage} />
      </Switch>
      <Footer />
    </React.Fragment>
  </BrowserRouter>
);

export default Routes;
