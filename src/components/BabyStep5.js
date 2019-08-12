import React from "react";
import { Spring } from "react-spring/renderprops";

export default function BabyStep5() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1000, duration: 1000 }}
    >
      {props => (
        <div style={props}>
          <div style={b5Style}>
            <h1>Baby Step 5</h1>
            <h2>Save for Your Children’s College Fund</h2>
            <p>
              By this step, you've paid off all debts (except the house) and
              started saving for retirement. Next, it's time to save for your
              children’s college expenses (that is, if they make it through
              Algebra II and Chemistry unscathed). We recommend 529 college
              savings plans or ESAs (Education Savings Accounts).
            </p>
          </div>
        </div>
      )}
    </Spring>
  );
}

const b5Style = {
  background: "navy",
  color: "white",
  padding: "1.5rem"
};
