import styled from 'styled-components';
import defaultImg from '../imgs/room-1.jpeg';


const StyledHero = styled.header`
	float:left;
	width:100%;
	min-height: 60vh;
	background: url(${props => props.img ? props.img:defaultImg}) center/cover no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default StyledHero;