import React from "react";
import Axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get('./src/baby-steps.json');
      console.log(res);
      .then(function(res) => {
        this.setState({ persons: res.data });
      });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}
