import React from "react";
import { Spring } from "react-spring/renderprops";

export default function BabyStep2() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1000, duration: 1000 }}
    >
      {props => (
        <div style={props}>
          <div style={b2Style}>
            <h1>Baby Step 2</h1>
            <h2>Pay Off All Debt (Except the House) Using the Debt Snowball</h2>
            <p>
              Next, it’s time to pay off the cars, the credit cards, and your
              student loans. Start by listing all of your debts except for your
              mortgage. Put them in order by balance from smallest to largest.
              This is called the debt snowball method, and you’ll use it to
              knock out your debts one by one.
            </p>
          </div>
        </div>
      )}
    </Spring>
  );
}

const b2Style = {
  background: "deepskyblue",
  color: "white",
  padding: "1.5rem"
};
