import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'; // ES6
import { Button } from "react-bootstrap"
import '../styles/transitions.css';
import '../styles/sidebar.css';

class ProfPic extends React.Component
{
    constructor(props)
    {
        super(props);
        this.avatar = "https://png2.kisspng.com/sh/d3bd0d6f9b082d62634100512957dcb5/L0KzQYm3VsI2N5JuipH0aYP2gLBuTfRzaahuhtk2bHnxdX7okwQufJJuhOU2c3BxebS0lPhmNZlqfNluaHBqPcTyhgRkcF55h9H9aD3yhcXzif5mNWZnS6JrZna0QbW9UMU5NmY2Tac6MkazQYa5WckzOWY3SaM7MEOxgLBu/kisspng-drawing-line-art-tails-sonic-the-hedgehog-sketch-tooth-outline-5b30bff11d6058.5155126015299215211203.png";
        this.color = "green";
        this.pallette = {
            background: "#00ff55",
        };
    }
	render()
	{
		return (
        <div className="avatar" >
		<img src={this.avatar} style={this.pallette}/>
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
			<ProfPic className="avatar"/>

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