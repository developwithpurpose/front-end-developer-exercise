/*jshint esnext: true */


import React from "react/addons";
import Step from "../step";// jshint ignore:line

let StepOne = React.createClass ({

  render() {
    return (
      /*jshint ignore:start */
      <Step step={1}>
        <p>
          An emergency fund is for those unexpected events in life that you can’t plan for: the loss of a job, an unexpected pregnancy, a faulty car transmission, and the list goes on and on. It’s not a matter of if these events will happen; it’s simply a matter of when they will happen.
        </p>

        <p>
          This beginning emergency fund will keep life’s little Murphies from turning into new debt while you work off the old debt. If a real emergency happens, you can handle it with your emergency fund. No more borrowing. It’s time to break the cycle of debt!
        </p>
      </Step>
      /*jshint ignore:end */
    );
  }
});

StepOne.contextTypes = {
  router: React.PropTypes.func
};

export default StepOne;
