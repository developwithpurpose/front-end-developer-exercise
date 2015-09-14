/*jshint esnext: true */

import React from "react/addons";
import Step from "../step";// jshint ignore:line

var StepThree = React.createClass ({

  render() {
    return (
      /*jshint ignore:start */
      <Step step={3}>

        <p>
          Once you complete the first two baby steps, you will have built serious momentum. But don’t start throwing all your “extra” money into investments quite yet. It’s time to build your full emergency fund. Ask yourself, “What would it take for me to live for three to six months if I lost my income?” Your answer to that question is how much you should save.
        </p>

        <p>
          Use this money for emergencies only: incidents that would have a major impact on you and your family. Keep these savings in a money market account. Remember, this stash of money is not an investment; it is insurance you’re paying to yourself, a buffer between you and life.
        </p>

        </Step>
        /*jshint ignore:end */
    );
  }
});

StepThree.contextTypes = {
  router: React.PropTypes.func
};

export default StepThree;
