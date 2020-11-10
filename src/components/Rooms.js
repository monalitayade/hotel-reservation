import React from 'react';
import { Link } from 'react-router-dom';
import Defaultimg from '../imgs/room-1.jpeg';
import PropTypes from 'prop-types';

export default function Rooms({ room }){
	//console.log(room);
	const{name, slug, images, price} = room;
	return(
		
			<div className="rooms-block">
				<div className="rooms-img">
					<img src={images[0] || Defaultimg} alt="single-room" />
				</div>
				<div className="rooms-price">
					<div className="price">${price}</div>
					<p>Per night</p>
				</div>
				<Link to={`/rooms/${slug}`} className="room-link">
					<div className="featured-btn">Features</div>					
				</Link>
				<div className="caption">{name}</div>
			</div>			
		
	);
}

Rooms.propTypes = {
	room : PropTypes.shape({
		name:PropTypes.string.isRequired,
		slug:PropTypes.string.isRequired,
		images:PropTypes.arrayOf(PropTypes.string).isRequired,
		price:PropTypes.number.isRequired,
	})
}
