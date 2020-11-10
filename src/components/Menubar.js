import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Menubar extends Component{
	constructor(props){
		super(props)
		this.state = {

		}
	}
	render(){
		return(
			<div className="menubar">
				<div className="menuwrap">
					<Link to='/' className="logo">Logo</Link>
					<ul className="link-wrap">
						<li className="link">
							<Link to='/rooms/' className="link-item">Rooms</Link>
						</li>
						<li className="link">
							<Link to='/' className="link-item">Home</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}