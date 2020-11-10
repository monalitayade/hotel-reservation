import React, { Component } from 'react';
import '../style/scss/index.scss';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import {Link} from "react-router-dom";


export default class Home extends Component{
	constructor(props){
		super(props)
		this.state = {
		}
	}

	
	render(){
		return(
			<div>
			<Hero>
				<Banner title="Lorem Ipsum" subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry">
					<Link to='/rooms' className="btn-primary">Our-rooms</Link>
				</Banner>
			</Hero>
			<Services />
			<FeaturedRooms />
			</div>
		);
	}
}