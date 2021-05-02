import './App.css';
import React, {Component} from 'react';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import Person from "./Persons/Person";

class App extends Component {
    state = {
        username: 'State Bharti Punj',
        persons: [
            {name: 'John', age: 30},
            {name: 'Peter', age: 30},
            {name: 'Mark', age: 30},
            {name: 'Json', age: 30},
            {name: 'Hilary', age: 30},
            {name: 'Kent', age: 30},
        ]
    }

    onInputChangeHandler = (event) => {
        this.setState({username: event.target.value});
    }

    render() {
        return (
            <div className="App">
                <UserInput changed={this.onInputChangeHandler} currentName={this.state.username}/>
                <UserOutput name="userOutput" username={this.state.username}/>
            </div>
        )
    };
}

export default App;
