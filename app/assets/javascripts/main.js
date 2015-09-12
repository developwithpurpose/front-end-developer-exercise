/*jshint esnext: true */

/*jshint ignore:start */
import React from "react";
import Router, { Route, DefaultRoute, RouteHandler, Link } from "react-router";

import App from "./components/app";
import MainSection from "./components/main-section";
import StepOne from "./components/steps/step1";
import StepTwo from "./components/steps/step2";
import StepThree from "./components/steps/step3";
import StepFour from "./components/steps/step4";
import StepFive from "./components/steps/step5";
import StepSix from "./components/steps/step6";
import StepSeven from "./components/steps/step7";

let routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={StepOne} />
    <Route name="stepOne" path="stepOne" handler={StepOne} />
    <Route name="stepTwo" path="stepTwo" handler={StepTwo} />
    <Route name="stepThree" path="stepThree" handler={StepThree} />
    <Route name="stepFour" path="stepFour" handler={StepFour} />
    <Route name="stepFive" path="stepFive" handler={StepFive} />
    <Route name="stepSix" path="stepSix" handler={StepSix} />
    <Route name="stepSeven" path="stepSeven" handler={StepSeven} />
  </Route>
);


Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  React.render(<Handler {...state} />, document.querySelector(".app"));
});
/*jshint ignore:end */
