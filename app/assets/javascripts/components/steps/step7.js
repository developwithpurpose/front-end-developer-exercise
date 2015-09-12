/*jshint esnext: true */

import React from "react/addons";
import Step from "../step";// jshint ignore:line

let StepSeven = React.createClass ({

  render() {
    return (
          /*jshint ignore:start */
      <Step step={7}>
        <p>
          It’s time to build wealth and give like never before. Leave an inheritance for future generations, and bless others now with your excess. It's really the only way to live!
        </p>

        <p>
          Golda Meir says, “You can’t shake hands with a clenched fist.” Vow to never hold your money so tightly that you never give any away. Hoarding money is not the way to wealth. Save for yourself, save for your family’s future, and be gracious enough to bless others. You can do all three at the same time.
        </p>

      </Step>
        /*jshint ignore:end */
    );
  }
});

StepSeven.contextTypes = {
  router: React.PropTypes.func
};

export default StepSeven;
