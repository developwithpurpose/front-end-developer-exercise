import React from "react";
import { Spring } from "react-spring/renderprops";

export default function BabyStep6() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1000, duration: 1000 }}
    >
      {props => (
        <div style={props}>
          <div style={b6Style}>
            <h1>Baby Step 6</h1>
            <h2>Pay Off Your Home Early</h2>
            <p>
              Now, bring it all home. Baby Step 6 is the big dog! Your mortgage
              is the only thing between you and complete freedom from debt. Can
              you imagine your life with no house payment? Any extra money you
              can put toward your mortgage could save you tens (or even
              hundreds) of thousands in interest.
            </p>
          </div>
        </div>
      )}
    </Spring>
  );
}

const b6Style = {
  background: "lightskyblue",
  color: "white",
  padding: "1.6rem"
};
