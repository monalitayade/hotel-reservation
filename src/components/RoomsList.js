import React from 'react';
import Room from './Rooms';

export default function RoomsList({ rooms }){
	console.log(rooms);
	if(rooms.length == 0){
		return(
			<h3>No rooms matched your search.</h3>
		)
	}
	return(
		<div className="featured-rooms">
			<div className="featured-rooms-grid">
				{
					rooms.map((item) => {
						return <Room key={item.id} room={item} />;						
					})
				}				
			</div>
		</div>
	)
}