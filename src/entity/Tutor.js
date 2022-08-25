import React from "react";
import Radium from "radium";
import './Tutor.scss';

const Tutor = (props) => {
    const inputClasses = ['input']

    if (props.name !== '') {
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }

    if (props.name.length > 5) {
        inputClasses.push('bold')
    }

    const style = {
        border: '1px solid #ccc',
        boxShadow: '0 4px 5px 0 rgba(0,0,0,.14)',
        ':hover': {
            border: '1px solid #aaa',
            boxShadow: '0 4px 15px 0 rgba(0,0,0, .25)',
            cursor: 'pointer'
        }
    }

    return (
        <div className="Tutor" style={style}>
            <p>Name: <strong>{props.name}</strong></p>
            <p>Qualification: <strong>{props.qualification}</strong></p>
            <p>Phone Number: <strong>{props.phoneNumber}</strong></p>
            <input
                type="text"
                onChange={props.onChangeName}
                value={props.name}
                className={inputClasses.join(' ')}
            />
            <button
                onClick={props.onDelete}
            >Delete</button>
        </div>
    );
}

export default Radium(Tutor);