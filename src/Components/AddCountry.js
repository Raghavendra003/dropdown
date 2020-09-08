import React, { Component } from "react";
import axios from "axios";

class AddCountry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addCountry: "",
    };
  }

  addHandleChange = (e) => {
    // console.log("handle change called");
    this.setState({ addCountry: e.target.value });
  };
  addCountryHandler = () => {
    const data = { addCountry: this.state.addCountry };
    axios
      .post("http://13.57.235.126:5000/countries", data)
      .then((res) => {
        console.log(res.data.countries);
        this.setState(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { addCountry } = this.state;
    return (
      <div>
        <h1>Add a Country</h1>
        <input value={addCountry} onChange={this.addHandleChange} />

        <button onClick={this.addCountryHandler}>Add</button>
      </div>
    );
  }
}

export default AddCountry;
