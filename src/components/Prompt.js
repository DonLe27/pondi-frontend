import React from "react";
import { Link } from "react-router-dom";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import "../styles/prompt.css";

class Prompt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagefile: null,
      text: "",
      prompt: "Prompt"
    };
  }

  fileChangedHandler = event => {
    this.setState({ imagefile: URL.createObjectURL(event.target.files[0]) });
  };

  textInputHandler = event => {
    this.setState({ text: event.target.value });
  };

  uploadHandler = () => {
    console.log(this.state.imagefile);
  };

  render() {
    console.log(this.state.text);
    return (
      <div className="Prompt">
        <div>{this.state.prompt}</div>

        <textarea
          className="Input"
          type="text"
          rows="20"
          cols="80"
          value={this.state.text}
          onChange={this.textInputHandler}
          placeholder="Enter text..."
        />
        <div>
          {" "}
          <img src={this.state.imagefile} height="300" width="500" />
          <input
            type="file"
            accept="image/*"
            onChange={this.fileChangedHandler}
          />
          <Button className="btn btn-primary" onClick={this.uploadHandler}>
            Upload Image
          </Button>
        </div>
        <Link to="/">
          {" "}
          <Button className="btn btn-success">Submit</Button>
        </Link>
      </div>
    );
  }
}

export default Prompt;
