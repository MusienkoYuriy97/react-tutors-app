import React, { Component } from "react";
import Tutor from "../entity/Tutor";

class App extends Component {
    state = {
        tutors: [{ name: 'Alina Musienko', phoneNumber: '80297263627' }, { name: 'Yury Musienko', phoneNumber: '80298344491' }, { name: 'Alex Hunter', phoneNumber: '80291111111' }],
        title: 'Tutors'
    }

    handleChangeTitle = () => {
        console.log('hello');
    };

    render() {
        const tutors = this.state.tutors;
        return (
            <div style={{ textAlign: "center", color: "blue", fontSize: "30px" }}>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleChangeTitle}>Change title</button>
                <Tutor name={tutors[0].name} phoneNumber={tutors[0].phoneNumber} />
                <Tutor name={tutors[1].name} phoneNumber={tutors[1].phoneNumber} />
                <Tutor name={tutors[2].name} phoneNumber={tutors[2].phoneNumber} />
            </div>
        );

    }
}

export default App;
