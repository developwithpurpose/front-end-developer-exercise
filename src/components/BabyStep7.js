import React from 'react';
import { Spring } from 'react-spring/renderprops';

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
            <p>Build Wealth and Give</p>
          </div>
        </div>
      )}
    </Spring>
  )
};

const b7Style = {
  background: 'darkblue',
  color: 'white',
  padding: '1.5rem'
};
