/*jshint esnext: true */

import React from "react/addons";// jshint ignore:line
import Router, { RouteHandler } from "react-router";// jshint ignore:line

let MainSection = React.createClass ({

  render() {
    return (
        /*jshint ignore:start */
    <div className="main">
          <RouteHandler {...this.props}/>
    </div>
    /*jshint ignore:end */
    );
  }
});

MainSection.contextTypes = {
  router: React.PropTypes.func
};

export default MainSection;
