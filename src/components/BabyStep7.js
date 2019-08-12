import React from "react";
import { Spring } from "react-spring/renderprops";

export default function BabyStep7() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1000, duration: 1000 }}
    >
      {props => (
        <div style={props}>
          <div style={b7Style}>
            <h1>Baby Step 7</h1>
            <h2>Build Wealth and Give</h2>
            <p>
              You know what people with no debt can do? Anything they want! The
              last step is the most fun. You can live and give like no one else!
              Keep building wealth and become insanely generous. Leave an
              inheritance for your kids and their kids. Now, that's what we call
              leaving a legacy!
            </p>
          </div>
        </div>
      )}
    </Spring>
  );
}

const b7Style = {
  background: "darkblue",
  color: "white",
  padding: "1.5rem"
};
