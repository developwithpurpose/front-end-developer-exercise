import React from 'react';
import { Spring } from 'react-spring/renderprops';

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
            <p>Save for Your Children’s College Fund</p>
          </div>
        </div>
      )}
    </Spring>
  )
};

const b5Style = {
  background: 'navy',
  color: 'white',
  padding: '1.5rem'
};
