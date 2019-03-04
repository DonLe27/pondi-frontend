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
      <div>
        <div className="Prompt">{this.state.prompt}</div>

        <div className="Container">
          <textarea
            type="text"
            value={this.state.text}
            onChange={this.textInputHandler}
            placeholder="Type your response here"
          />
        </div>
        <Link to="/">
          {" "}
          <Button className="Submit">Submit</Button>
        </Link>

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
      </div>
    );
  }
}

export default Prompt;
