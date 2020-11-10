import React, { Component } from 'react';
import '../style/scss/index.scss';
import Hero from '../components/Hero';
export default class Error extends Component{
	constructor(props){
		super(props)
		this.state = {
		}
	}

	
	render(){
		return(
			<div>
			<Hero />
			</div>
		);
	}
}