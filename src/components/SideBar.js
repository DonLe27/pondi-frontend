import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'; // ES6
import { Button } from "react-bootstrap"
import '../styles/transitions.css';
import '../styles/sidebar.css';




class SideBar extends React.Component
{
	render()
	{

		var addStream = this.props.addStream;
		var addOcean = this.props.addOcean;
		var addArchive = this.props.addArchive;
		return (
			<div className="SideBar">
			This is a sidebar
			<Button
                block
                bsSize="large"
                addStream={this.props.addStream}
                onClick={(i)=>addStream('somevar')}
            >Stream
            </Button>
            <Button
                block
                bsSize="large"
                addOcean={this.props.addOcean}
                onClick={(i)=>addOcean('somevar')}
            >Ocean
            </Button>
            <Button
                block
                bsSize="large"
                addArchive={this.props.addArchive}
                onClick={(i)=>addArchive('somevar')}
            >Archive
            </Button>
			</div>


		)
	}
}


export default SideBar