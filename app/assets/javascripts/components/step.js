/*jshint esnext: true */

import React from "react/addons";
import {getFriends} from "../friends";

let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;// jshint ignore:line

let Step = React.createClass ({
  getInitialState: function() {
    return {
      friends: []
    };
  },

  componentDidMount: function() {
    this.setState({
      friends: getFriends(this.props.step)
    });
  },

  displayFriends() {
    /*jshint ignore:start */
    if (this.state.friends.length > 3) {
      let remaining = this.state.friends.length - 2;
      return (
        <p className="friends">
         <a href="#" key={1}>{this.state.friends[0]}</a>, <a href="#" key={2}>{this.state.friends[1]}</a> and {remaining} other friends are also in this step.
        </p>
      );
    } else if (this.state.friends.length === 3) {
      let remaining = this.state.friends.length - 2;
      return (
        <p className="friends">
         <a href="#" key={1}>{this.state.friends[0]}</a>, <a href="#" key={2}>{this.state.friends[1]}</a> and {remaining} other friend is also in this step.
        </p>
      );
    } else if(this.state.friends.length === 2) {
      return (
        <p className="friends">
         <a href="#" key={1}>{this.state.friends[0]}</a> and <a href="#" key={2}>{this.state.friends[1]}</a> are also in this step.
        </p>
      );

      return <p>{friends} are on this step.</p>
    } else if(this.state.friends.length === 1) {
          let friends = this.state.friends.map((friend, i) => {
            return <a href="#" key={i}>{friend}</a>
          });

          return <p className="friends">{friends} is also in this step.</p>
    } else {
      return <p>No Friends in this step.</p>
    }
    /*jshint ignore:end */
  },

  render() {
    /*jshint ignore:start */
    return (
      <ReactCSSTransitionGroup transitionName="steps" transitionAppear={true}>
        <section className="step">
          <img src={`/images/headings/heading_bs${this.props.step}.png`} alt={`Step ${this.props.step}`}/>
          {this.props.children}
          {this.displayFriends()}
        </section>
      </ReactCSSTransitionGroup>
    );
  /*jshint ignore:end */
  }
});

Step.contextTypes = {
  router: React.PropTypes.func
};

export default Step;
