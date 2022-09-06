import React from "react";
import classes from './Tutor.module.css';
import PropTypes from 'prop-types';
import withClass from "../hoc/withClass";

class Tutor extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    componentDidMount() {
        if (this.props.index === 1) {
            this.inputRef.current.focus();
        }
    }
    render() {
        const inputClasses = [classes.input];

        if (this.props.name !== '') {
            inputClasses.push(classes.green);
        } else {
            inputClasses.push(classes.red);
        }

        if (this.props.name.length > 5) {
            inputClasses.push(classes.bold);
        }

        return (
            <React.Fragment>
                <p>Name: <strong>{this.props.name}</strong></p>
                <p>Qualification: <strong>{this.props.qualification}</strong></p>
                <p>Phone Number: <strong>{this.props.phoneNumber}</strong></p>
                <input
                    ref={this.inputRef}
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button
                    onClick={this.props.onDelete}
                >Delete</button>
            </React.Fragment>
        );
    }
}


Tutor.propTypes = {
    index: PropTypes.number,
    name: PropTypes.string,
    qualification: PropTypes.string,
    phoneNumber: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func,
}

export default withClass(Tutor, classes.Tutor)