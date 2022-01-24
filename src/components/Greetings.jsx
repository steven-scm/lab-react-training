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




const Greetings = (props) => {
    console.log(props);
    let greetings = "";
    if (props.lang === "de") {
        greetings = "Halo";
    } else if (props.lang === "en") {
        greetings = "Hello";
    } else if (props.lang === "es") {
        greetings = "Hola"
    } else if (props.lang === "fr") {
        greetings = "Bonjour"
    }


    return (
        <div className="greetings">
            <p>{greetings} {props.children}</p>
        </div>
    )



    // <div className="greetings">
    //     <pre>{JSON.stringify(props, null, 2)}</pre>


};



export default Greetings;
