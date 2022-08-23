import React from "react";

function Tutor(props) {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <p>Phone Number: <strong>{props.phoneNumber}</strong></p>
        </div>
    );
}

export default Tutor;