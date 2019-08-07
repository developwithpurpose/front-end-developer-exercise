import React from 'react';
import { Spring } from 'react-spring/renderprops';

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
            <p>Pay Off Your Home Early</p>
          </div>
        </div>
      )}
    </Spring>
  )
};

const b6Style = {
  background: 'lightskyblue',
  color: 'white',
  padding: '1.6rem'
};
