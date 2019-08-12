import React from "react";
import { Spring } from "react-spring/renderprops";

// import icon from "./assets/images/icons/individual/icons_large_bs6_blue.png";

export default function BabyStep2() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={b1Style}>
            <h1>Baby Step 1</h1>
            <h2>Save $1,000 for Your Starter Emergency Fund</h2>
            <p>
              In this first step, your goal is to save $1,000 as fast as you
              can. Your emergency fund will cover those unexpected life events
              you can't plan for. And there are plenty of them. You don’t want
              to dig a deeper hole while you’re trying to work your way out of
              debt!
            </p>
            <Spring
              from={{ number: 0 }}
              to={{ number: 10 }}
              config={{ duration: 10000 }}
            >
              {props => (
                <div style={props}>
                  <h1 style={counter}>{props.number.toFixed()}</h1>
                </div>
              )}
            </Spring>
          </div>
        </div>
      )}
    </Spring>
  );
}

const b1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem"
};

const counter = {
  background: "#333",
  textAlign: "center",
  width: "100px",
  borderRadius: "50%",
  margin: "1rem auto"
};
