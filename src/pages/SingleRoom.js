import React, { Component } from 'react';
import defaultBcg from '../imgs/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component{
	constructor(props){
		super(props);
		console.log(props);
		this.state = {
			slug:this.props.match.params.slug,
			defaultBcg
		};
	}
	static contextType = RoomContext;
	
	render(){
		const {getRoom} = this.context;
		const room = getRoom(this.state.slug);
		//console.log(room);
		if(!room){
			return (<div className="error">
				<h3>No such room found</h3>
				<Link to='/rooms' className="back-link">Back to Rooms</Link> 
			</div>
			);
		}
		const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;
		const [mainImage,...defaultImg] = images;
		console.log(defaultImg);

		return(
			<div>
			<StyledHero img={mainImage || this.state.defaultBcg}>
				<Banner title={`${name} room`}>
					<Link to='/rooms' className="btn-primary">Back to Rooms</Link>
				</Banner>
			</StyledHero>
			<section className="single-room">
				<div className="imgs-plot">				
				{defaultImg.map((item,index) => {
					return(
					<div className="single-room-imgs" key={index}>
					<img src={item} alt={name} />
					</div>
				)})}
				</div>	

				<div className="room-info">
					<article className="desc">
						<h3>Details</h3>
						<p>{description}</p>
					</article>
					<article className="info">
						<h3>Info</h3>
						<h4>Price : ${price} </h4> 
						<h4>Size : {size} SQFT </h4> 
						<h4>Max Capacity : {" "}
							{capacity > 1 ? `${capacity} Peoples` : `${capacity} Person`}
						</h4>
						<h4>{pets?"Pets allowed" : "Pets not allowed"}</h4>
						<h4>{breakfast && "free breakfast included"}</h4>
					</article>
				</div>			
			</section>
			<section className="room-extras">
				<h3>extras</h3>
				<ul className="extras">
				{extras.map((item,index) => {
					return(
					<li key={index}>{item}</li>
					)
				})}
				</ul>
			</section>
			</div>
		);
	}
}