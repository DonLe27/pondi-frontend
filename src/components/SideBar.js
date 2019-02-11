import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'; // ES6
import { Button } from "react-bootstrap"
import '../styles/transitions.css';
import '../styles/sidebar.css';

class ProfPic extends React.Component
{
	render()
	{
		return (

		<div className="ProfPic">
			<img ></img>

		</div>

		);
	}
}



class SideBar extends React.Component
{
	render()
	{

		var addStream = this.props.addStream;
		var addOcean = this.props.addOcean;
		var addArchive = this.props.addArchive;
		return (
			<div className="SideBar">
			<ProfPic />

			<div className="Username">Username</div>
			<Button
				className = "Button"
                block
                bsSize="large"
                addStream={this.props.addStream}
                onClick={(i)=>addStream('somevar')}
            >stream
            </Button>
            <Button
            className = "Button"
                block
                bsSize="large"
                addOcean={this.props.addOcean}
                onClick={(i)=>addOcean('somevar')}
            >ocean
            </Button>
            <Button
            className = "Button"
                block
                bsSize="large"
                addArchive={this.props.addArchive}
                onClick={(i)=>addArchive('somevar')}
            >archive
            </Button>
            <Button
            className = "Button"
                block
                bsSize="large"
                addArchive={this.props.addArchive}
                onClick={(i)=>addArchive('somevar')}
            >prompt
            </Button>
			</div>
		)
	}
}


export default SideBar