import React from "react";
import { Link } from "react-router-dom";

import { FormControl, InputGroup, Button } from "react-bootstrap";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagefile: null,
      text: ""
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
        <input
          type="text"
          value={this.state.text}
          onChange={this.textInputHandler}
        />
        <input type="file" onChange={this.fileChangedHandler} />

        <Link to="/">
          {" "}
          <Button className="btn btn-primary">Submit</Button>
        </Link>
        <div>
          {" "}
          <img src={this.state.imagefile} height="300" width="300" />
          <Button className="btn btn-primary" onClick={this.uploadHandler}>
            Upload
          </Button>
        </div>
      </div>
    );
  }
}

export default InputForm;
