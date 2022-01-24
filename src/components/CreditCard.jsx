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




const CreditCard = (props) => {
    console.log(props);
    let bgcolor = `${props.bgColor}`;
    const divStyle = {
        backgroundColor: bgcolor,
        color: `${props.color}`
    };





    return (
        <div className="CreditCardColor" style={divStyle}>
            <p>{props.type}</p>
            <p>{props.number}</p>
            <span>{props.Expiration}</span><span>{props.bank}</span>
            <p>{props.owner}</p>
        </div >
    )


};



export default CreditCard;
