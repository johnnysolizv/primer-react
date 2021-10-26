import React, { Component } from "react";

class PersonCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }



  render() {
    const { firstName, lastName, age, haircolor } = this.props;

    return (
      <div>
        <h1>
          {firstName} {lastName}
        </h1>
        <ul>
          <li>Age: {age + this.state.contador}</li>
          <li>Hair Color: {haircolor}</li>
        </ul>
        <button onClick={() => this.AlHacerClick()}> Birthday button for {firstName} {lastName}
        </button>
      </div>
    );
  }



  AlHacerClick() {
    this.setState({
      contador: this.state.contador + 1,
    });
  }


}
export default PersonCards;
