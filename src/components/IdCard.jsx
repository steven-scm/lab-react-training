import React from "react";

// const IdCard = (props) => {
// 	console.log(props);
// 	return (
// 		<div className="card">
// 			<div className="avatar">
// 				<img src={props.picture} alt={props.name} />
// 			</div>
// 			<pre>{JSON.stringify(props, null, 2)}</pre>
// 			<p>Name: {props.name}</p>
// 			<p>Age in human age: {props.age * 7}</p>
// 		</div>
// 	);
// };


const IdCard = (props) => {
	console.log(props);
	return (
		<div className="card">
			<div className="avatar">
				<img src={props.picture} alt={props.name} />
			</div>
			{/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
			<div className="infos">
				<p>First name: {props.firstName}</p>
				<p>Last name: {props.lastName}</p>
				<p>Height: {props.heigth}</p>
				{/* <p>Birth: {props.birth.toString()}</p> */}
				<p>Birth: {props.birth.toDateString()}</p>
			</div>
		</div>
	);
};


export default IdCard;
