/*jshint esnext: true */

import React from "react";
import Header from "../components/header";// jshint ignore:line
import Sidebar from "../components/sidebar";// jshint ignore:line
import MainSection from "../components/main-section";// jshint ignore:line

let App = React.createClass ({

  render() {
    /*jshint ignore:start */
    return (
      <div className="container">
      <header>
        <Header/>
      </header>
        <sidebar>
          <Sidebar/>
        </sidebar>
      <main>
        <MainSection />
      </main>
    </div>
    );
    /*jshint ignore:end */
  }
});

App.contextTypes = {
  router: React.PropTypes.func
};

export default App;
