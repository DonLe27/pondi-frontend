import React from "react";
import LoginButton from "./LoginButton";
import InputButton from "./InputButton";
import { Link } from "react-router-dom";

const Landing = () => (
  <div>
    <LoginButton />
    <InputButton />
    <h1>pondi</h1>
    <Form />
  </div>
);

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="form-group">
        <form onSubmit={this.handleSubmit}>
          <label>
            is water wet?
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <Link to="/register">
            <button className="btn btn-primary">start your journal</button>
          </Link>
        </form>
      </div>

      // <form onSubmit={this.handleSubmit}>

      //     <label>
      //         is water wet?
      //         <input type="text" value={this.state.value} onChange={this.handleChange} />
      //     </label>
      //     <input type="submit" value="start your journal" />
      // </form>
    );
  }
}

export default Landing;
