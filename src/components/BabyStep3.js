import React from "react";
import { Spring } from "react-spring/renderprops";

export default function BabyStep3() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1000, duration: 1000 }}
    >
      {props => (
        <div style={props}>
          <div style={b3Style}>
            <h1>Baby Step 3</h1>
            <h2>
              Save 3–6 Months of Expenses in a Fully Funded Emergency Fund
            </h2>
            <p>
              You’ve paid off your debt! Don’t slow down now. Take that money
              you were throwing at your debt and build a fully funded emergency
              fund that covers 3–6 months of your expenses. This will protect
              you against life’s bigger surprises, like the loss of a job or
              your car breaking down, without slipping back into debt.
            </p>
          </div>
        </div>
      )}
    </Spring>
  );
}

const b3Style = {
  background: "lightblue",
  color: "white",
  padding: "1.5rem"
};
