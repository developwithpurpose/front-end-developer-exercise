/*jshint esnext: true */


import React from "react/addons";
import Step from "../step";// jshint ignore:line

let StepFive = React.createClass ({

  render() {
    return (
      /*jshint ignore:start */
      <Step step={5}>
        <p>
          By this point, you should have already started Baby Step 4—investing 15% of your income—before saving for college. Whether you are saving for you or your child to go to college, you need to start now.
        </p>

        <p>
          In order to have enough money saved for college, you need to have a goal. Determine how much per month you should be saving at 12% interest in order to have enough for college. If you save at 12% and inflation is at 4%, then you are moving ahead of inflation at a net of 8% per year!
        </p>

      </Step>
        /*jshint ignore:end */
    );
  }
});

StepFive.contextTypes = {
  router: React.PropTypes.func
};

export default StepFive;
