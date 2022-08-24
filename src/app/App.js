import React, { Component } from "react";
import Tutor from "../entity/Tutor";

class App extends Component {
    state = {
        tutors: [{ name: 'Alina Musienko', phoneNumber: '80297263627', qualification: 'Speech therapist' }, { name: 'Yury Musienko', phoneNumber: '80298344491', qualification: 'Software developer' }, { name: 'Alex Hunter', phoneNumber: '80291111111', qualification: 'Math teacher' }],
        title: 'Tutors',
        showTutors: false
    }

    onChangeName(name, index) {
        const tutor = this.state.tutors[index];
        tutor.name = name;
        const tutors = [...this.state.tutors];
        tutors[index] = tutor;
        this.setState({ tutors });
    }

    handleInput = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    handleDelete(index) {
        const tutors = [...this.state.tutors];
        tutors.splice(index, 1);
        this.setState({tutors});
    }

    toggleTutorsHandler = () => {
        this.setState({
            showTutors: !this.state.showTutors
        });
    }

    render() {
        const tutors = this.state.tutors;
        return (
            <div style={{
                textAlign: "center",
                color: "black",
                fontSize: "15px",
            }}>
                <div>
                    <h1>{this.state.title}</h1>
                    <input
                        type='text'
                        placeholder='type new title'
                        onChange={this.handleInput}
                    />
                    <button
                        onClick={this.toggleTutorsHandler}
                    >Toggle Tutors</button>
                </div>
                {this.state.showTutors ? this.state.tutors.map((tutor, index) => {
                    return (
                        <Tutor
                            key={index}
                            name={tutor.name}
                            qualification={tutor.qualification}
                            phoneNumber={tutor.phoneNumber}
                            onDelete={this.handleDelete.bind(this, index)}
                            onChangeName={event => this.onChangeName(event.target.value, index)}
                        />
                    )
                }) : null}
            </div>
        );

    }
}

export default App;
