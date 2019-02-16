import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'; // ES6
import { Button } from "react-bootstrap"
import '../styles/transitions.css';
import '../styles/sidebar.css';
import vec1 from '../styles/vectors/vector1.png';
import vec2 from '../styles/vectors/vector2.png';

class ProfPic extends React.Component
{
    constructor(props)
    {
        super(props);
        this.avatar = "https://png2.kisspng.com/sh/7b65a5115d87193c5e754c734b613a90/L0KzQYm3U8AzN5RsfZH0aYP2gLBuTfxqdpZ4ReV9YYL2PcjvigRmNZRxgeI2YYL3PcjvigRmNZ1uhtd8LYP3ccP6TcViQWprTqgEY3O5dYaCTsQ3O2Y6T6MAMUW1QIG6WcUzQWk4T6Y3cH7q/kisspng-lines-stars-white-clip-art-white-lines-stars-5a99f669cc6e59.4635571515200395298374.png";
        this.pallette = "#aaccaa";
    }
	render()
	{
		return (
        <div className="avatar" >
		<img src={this.avatar} style={{'background-color' : this.pallette}}/>
        </div>
		);
	}
}

class Username extends React.Component
{
    constructor(props)
    {
        super(props);
        this.username = this.props.userData;
    }

    render() 
    {
        return (
        <div className="Username">{this.props.userName}</div>
        )
    }
}



class SideBar extends React.Component
{

    constructor(props)
    {
        super(props);

        this.userName = this.props.userData;
    }

	render()
	{

		var addStream = this.props.addStream;
		var addOcean = this.props.addOcean;
		var addArchive = this.props.addArchive;
		return (
			<div className="SideBar">
			<ProfPic className="avatar"/>

			<Username userName={this.userName}/>
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

            <img className="sidebar-vector1" src={vec1} alt="vector1"/>
            <img className="sidebar-vector2" src={vec2} alt="vector1"/>


			</div>
		)
	}
}


export default SideBar