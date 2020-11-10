import React from 'react';

export default function Banner({children ,title, subtitle}){
	return(
		<div className="banner">
			<div className="title">{title}</div>
			<div className="sub-title">{subtitle}</div>
			{children}
		</div>
	)
}