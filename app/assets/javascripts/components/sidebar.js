/*jshint esnext: true */

import React from "react";
import Router, { Route, Link } from "react-router";// jshint ignore:line

let Sidebar = React.createClass ({

  render() {
    return (
      /*jshint ignore:start */
      <div className="sidebar">
        <ul>
          <li><Link id="one" to="stepOne">Baby Step 1</Link></li>
          <li><Link id="two" to="stepTwo">Baby Step 2 </Link></li>
          <li><Link id="three" to="stepThree">Baby Step 3 </Link></li>
          <li><Link id="four" to="stepFour">Baby Step 4 </Link></li>
          <li><Link id="five" to="stepFive">Baby Step 5 </Link></li>
          <li><Link id="six" to="stepSix">Baby Step 6 </Link></li>
          <li><Link id="seven" to="stepSeven">Baby Step 7 </Link></li>
        </ul>

      </div>
          /*jshint ignore:end */
    );
  }
});

export default Sidebar;
