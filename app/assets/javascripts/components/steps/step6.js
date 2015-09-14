/*jshint esnext: true */

import React from "react/addons";
import Step from "../step";// jshint ignore:line

let StepSix = React.createClass ({

  render() {
    return (
          /*jshint ignore:start */
      <Step step={6}>
        <p>
          Now it’s time to begin chunking all of your extra money toward the mortgage. You are getting closer to realizing the dream of a life with no house payments.
        </p>

        <p>
          As you attack this last debt, you will gain momentum much like you did back in the second step of the debt snowball. Remember, having absolutely no payments is totally within your reach!
        </p>

      </Step>
        /*jshint ignore:end */
    );
  }
});

StepSix.contextTypes = {
  router: React.PropTypes.func
};

export default StepSix;
