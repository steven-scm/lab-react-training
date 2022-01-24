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




const Random = (props) => {
    console.log(props);
    let random = Math.round((Math.random() * props.max));



    return (
        <div className="randoms">
            <p>Random value between {props.min} and {props.max} =&gt;  {random}</p>
            {/* <p>Random value between {props.min} and {props.max} => {random}</p> */}
        </div>
    )




};



export default Random;
