import React from 'react';
import { Spring } from 'react-spring/renderprops';

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
              <p>Pay Off All Debt (Except the House) Using the Debt Snowball</p>
            </div>
          </div>
        )}
    </Spring>
    )
};

const b2Style = {
  background: 'deepskyblue',
  color: 'white',
  padding: '1.5rem'
};
