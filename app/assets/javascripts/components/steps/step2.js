/*jshint esnext: true */

import React from "react/addons";
import Step from "../step";// jshint ignore:line


let StepTwo = React.createClass ({

  render() {
    return (
      /*jshint ignore:start */
      <Step step={2}>
        <p>
          List your debts, excluding the house, in order. The smallest balance should be your number one priority. Don’t worry about interest rates unless two debts have similar payoffs. If that’s the case, then list the higher interest rate debt first.
        </p>

        <p>
          The point of the debt snowball is simply this: You need some quick wins in order to stay pumped up about getting out of debt! Paying off debt is not always about math. It’s about motivation. Personal finance is 20% head knowledge and 80% behavior. When you start knocking off the easier debts, you will see results and you will stay motivated to dump your debt.
        </p>
      </Step>
      /*jshint ignore:end */
    );
  }
});

StepTwo.contextTypes = {
  router: React.PropTypes.func
};

export default StepTwo;
