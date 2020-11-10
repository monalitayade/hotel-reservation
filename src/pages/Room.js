import React, { Component } from 'react';
import '../style/scss/index.scss';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from "react-router-dom";
import RoomContainer from '../components/RoomContainer';

const Room = () =>{
	return(
		<div>
		<Hero hero="roomsHero">
			<Banner title="Our Rooms" subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry">
				<Link to='/' className="btn-primary">Return home</Link>
			</Banner>
		</Hero>
		<RoomContainer />
		</div>
	);
}

export default Room;