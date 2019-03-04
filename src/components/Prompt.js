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
      prompt:
        "This is where the prompt goes; I imagine most of them to be pretty short but just in case it is long this is what it would look like yeehaw"
    };
  }

  fileChangedHandler = event => {
    this.setState({ imagefile: URL.createObjectURL(event.target.files[0]) });
  };

  textInputHandler = event => {
    this.setState({ text: event.target.value });
  };

  uploadHandler = event => {
    this.setState({ imagefile: event.target.value });
  };

  render() {
    console.log(this.state.imagefile);
    return (
      <div>
        <div className="Prompt">{this.state.prompt}</div>
        <input
          type="image"
          className="Refresh"
          src="http://www.stickpng.com/assets/images/585e4831cb11b227491c338e.png"
        />
        <div className="Container">
          <textarea
            type="text"
            value={this.state.text}
            onChange={this.textInputHandler}
            placeholder="Type your response here"
          />
          <input
            type="file"
            id="file"
            className="inputfile"
            onClick={this.uploadHandler}
          />
          <label for="file" className="Upload">
            <img src="https://images.vexels.com/media/users/3/153834/isolated/preview/d0679e2704e98a8041508fba4c332d49-paper-clip-stroke-icon-by-vexels.png" />
          </label>
        </div>

        <Link to="/">
          {" "}
          <Button className="Post">Post</Button>
        </Link>
      </div>
    );
  }
}

export default Prompt;
