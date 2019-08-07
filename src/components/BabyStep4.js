import React from 'react';
import { Spring } from 'react-spring/renderprops';

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
            <p>Invest 15% of Your Household Income in Retirement</p>
          </div>
        </div>
      )}
    </Spring>
  )
};

const b4Style = {
  background: 'mediumblue',
  color: 'white',
  padding: '1.5rem'
};
