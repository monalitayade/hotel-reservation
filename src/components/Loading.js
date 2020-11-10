import React from 'react';
import loadingGif from '../imgs/loading-arrow.gif';
export default function Loading(){
	return(
		<div className="loading">
			<h3>Featured data loading...</h3>
			<img src={loadingGif} alt="loading" />
		</div>
	);
}