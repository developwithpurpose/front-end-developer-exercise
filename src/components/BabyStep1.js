import React from 'react';
import { Spring } from 'react-spring/renderprops';

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
            <p>Save $1,000 for Your Starter Emergency Fund</p>
            <Spring
              from={{ number: 0 }}
              to={{ number: 10 }}
              config={{ duration: 10000 }}
            >
              {props => (
              <div style={props}>
                <h1 style={counter}>
                  {props.number.toFixed()}
                </h1>
              </div>
              )}
            </Spring>
          </div>
        </div>
      )}
    </Spring>
  )
};

const b1Style = {
  background: 'steelblue',
  color: 'white',
  padding: '1.5rem'
};

const counter = {
  background: '#333',
  textAlign: 'center',
  width: '100px',
  borderRadius: '50%',
  margin: '1rem auto'
};
