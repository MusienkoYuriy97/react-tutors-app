import React from "react";

function Tutor(props) {
    return (
        <div style={{
            border: '1px solid #ccc',
            margin: '10px',
            padding: '10px',
            display: 'inline-block',
            marginLeft: 'auto',
            marginRight: 'auto'
        }}>
            <p>Name: <strong>{props.name}</strong></p>
            <p>Qualification: <strong>{props.qualification}</strong></p>
            <p>Phone Number: <strong>{props.phoneNumber}</strong></p>
            <input
                onChange={props.onChangeName}
                value={props.name}
            />
            <button
                onClick={props.onDelete}
            >Delete</button>
        </div>
    );
}

export default Tutor;