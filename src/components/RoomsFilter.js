import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';

const getUnique = (items,value) => {
	return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({rooms}){
	const context = useContext(RoomContext);
	//console.log(context);
	const{
		handleChange,type,capacity,price,maxPrice,maxSize,minPrice,minSize,breakfast,pets
	} = context;

	let types = getUnique(rooms,'type');
	types = ['all',...types];
	types = types.map((item,index) => {
		return <option value={item} key={index} className="option">{item}</option>
	}) 
	

	let people = getUnique(rooms,'capacity');
	
	people = people.map((item,index) => {
		return <option value={item} key={index} className="option">{item}</option>
	})

	return(	
		<div>
		<div className="featured-rooms">
			<Title title="search Rooms" />
		</div>
		<div className="filter-container">
			<div className="filter-wrap">
				<form className="filter-form">
					{/*select type*/}
						<div className="form-group">
							<label htmlFor="type">room type</label>
							<select name="type" id="type" value={type} className="formControl" onChange={handleChange}>{types}</select>
						</div> 
					{/*end select type*/}
					{/*select guest*/}
						<div className="form-group">
							<label htmlFor="capacity">guest</label>
							<select name="capacity" id="capacity" value={capacity} className="formControl" onChange={handleChange}>{people}</select>
						</div> 
					{/*end select guest*/}
					{/*room price*/}
						<div className="form-group">
							<label htmlFor="price">room price ${price}</label>
							<input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="slider"/>
						</div>
					{/*end of room price*/}
					{/*size*/}
						<div className="form-group">
							<label htmlFor="size">room size</label>
							<div className="size-inputs">
								<input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"/>
								<input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/>
							</div>
						</div>
					{/*end of size*/}
					{/*extras*/}
						<div className="form-group">
							<div className="single-extra">
								<input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} className="check"/>
								<label htmlFor="breakfast">breakfast</label>
							</div>
							<div className="single-extra">
								<input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} className="check"/>
								<label htmlFor="pets">pets</label>
							</div>
						</div>
					{/*end of extras*/}
				</form>
			</div>
		</div>
		</div>
	)
}