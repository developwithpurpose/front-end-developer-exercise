import React from "react";
import { Spring } from "react-spring/renderprops";

export default function BabyStep4() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1000, duration: 1000 }}
    >
      {props => (
        <div style={props}>
          <div style={b4Style}>
            <h1>Baby Step 4</h1>
            <h2>Invest 15% of Your Household Income in Retirement</h2>
            <p>
              It's time to get serious about retirement—no matter your age. Take
              15% of your gross household income and start investing it into
              your retirement. Start with your company’s 401(k) plan and receive
              the full employer match. Invest the rest into Roth IRAs—one for
              you and one for your spouse (if you’re married).
            </p>
          </div>
        </div>
      )}
    </Spring>
  );
}

const b4Style = {
  background: "mediumblue",
  color: "white",
  padding: "1.5rem"
};
