import React from "react";
import './Tutor.scss';

class Tutor extends React.Component {

    componentWillReveiceProps(nextProps) {
        console.log('Tutor componentWillReveiceProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Tutor shouldComponentUpdate', nextProps, nextState);

        return nextProps.name.trim() !== this.props.name.trim();
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Tutor componentWillUpdate', nextProps, nextState);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('Tutor getDerivedStateFromProps', nextProps, prevState);

        return prevState;
    }

    getSnapshotBeforeUpdate() {
        console.log('Tutor getSnapshotBeforeUpdate');
    }

    componentDidUpdate() {
        console.log('Tutor componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('Tutor componentWillUnmount');
    }

    render() {
        console.log('Tutur render')
        const inputClasses = ['input']

        if (this.props.name !== '') {
            inputClasses.push('green')
        } else {
            inputClasses.push('red')
        }

        if (this.props.name.length > 5) {
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
                <p>Name: <strong>{this.props.name}</strong></p>
                <p>Qualification: <strong>{this.props.qualification}</strong></p>
                <p>Phone Number: <strong>{this.props.phoneNumber}</strong></p>
                <input
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button
                    onClick={this.props.onDelete}
                >Delete</button>
            </div>
        );
    }
}

export default Tutor;