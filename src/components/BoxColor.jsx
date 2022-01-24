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




const BoxColor = (props) => {
    console.log(props);
    let bgcolor = `${props.r},${props.g},${props.b}`;
    // const divStyle = {
    //     backgroundColor: "rgb({bgcolor})"
    // };

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    let bgcolorHex = rgbToHex(props.r, props.g, props.b);





    return (
        <div className="BoxColor" style={{ backgroundColor: "rgb(" + bgcolor + ")" }}>
            <p>rgb({bgcolor})</p>
            <p>{bgcolorHex}</p>

        </div >
    )


};



export default BoxColor;
