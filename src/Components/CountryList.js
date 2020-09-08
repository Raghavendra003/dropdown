import React, { Component } from "react";
import axios from "axios";

class CountryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://13.57.235.126:5000/countries")
      .then((res) => {
        console.log(res);
        this.setState({ countries: res.data.countries });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { countries } = this.state;
    // const uniqueCountry = this.countries.filter(countries.countries, "country");

    return (
      <div>
        Select a Country :
        <select>
          {countries.map((country, index) => (
            <option key={country.index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default CountryList;
