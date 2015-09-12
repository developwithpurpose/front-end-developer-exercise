/*jshint esnext: true */

import React from "react/addons";
import Step from "../step";// jshint ignore:line

let StepFour = React.createClass ({

  render() {
    return (
        /*jshint ignore:start */
      <Step step={4}>

        <p>
          When you reach this step, you’ll have no payments—except the house—and a fully funded emergency fund. Now it’s time to get serious about building wealth.
        </p>

        <p>
          Dave suggests investing 15% of your household income into Roth IRAs and pre-tax retirement plans. Don’t invest more than that because the extra money will help you complete the next two steps: college savings and paying off your home early.
        </p>

      </Step>
        /*jshint ignore:end */
    );
  }
});

StepFour.contextTypes = {
  router: React.PropTypes.func
};

export default StepFour;
