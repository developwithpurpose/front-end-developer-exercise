import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default function BabyStep3() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1000, duration: 1000 }}
    >
      {props => (
      <div style={props}>
        <div style={b3Style}>
          <h1>Baby Step 3</h1>
          <p>Save 3–6 Months of Expenses in a Fully Funded Emergency Fund</p>
        </div>
      </div>
      )}
    </Spring>
  )
};

const b3Style = {
  background: 'lightblue',
  color: 'white',
  padding: '1.5rem'
};

