import React, { Component } from 'react';
import Title from "./Title"
export default class Services extends Component{
	constructor(props){
		super(props)
		this.state = {
			services:[
				{	
					id:1,
					icon:require("../imgs/cocktail.svg"),
					title:"Free Cocktail",
					Desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
				},
				{
					id:2,
					icon:require("../imgs/hiking.svg"),
					title:"Endless hiking",
					Desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
				},
				{
					id:3,
					icon:require("../imgs/shuttle.svg"),
					title:"Free Shuttle",
					Desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
				},
				{
					id:4,
					icon:require("../imgs/beer.svg"),
					title:"Strongest Beer",
					Desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
				}
			]
		}
	}
	render(){
		const service = this.state.services.map((service,index) => {
			return(						
				<div className="service-block" key={index}>
					<div className="service-img">
						<img src={service.icon} alt="icon" />
					</div>
					<div className="service-desc">
						<div className="service-title">{service.title}</div>
						<div className="service-detail">{service.Desc}</div>
					</div>
				</div>				
			)
		})
		return(
			<div className="services">
				<div className="services-wrap">
					<Title title="services"/>
					<div className="service-grid">	
						{service}
					</div>
				</div>
			</div>
		);
	}
}