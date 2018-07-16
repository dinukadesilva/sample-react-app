import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: [
                {title: "Security Assignment", description: "The deadline is on 23rd"},
                {title: "Concert Rehearsals", description: "25th and 26th in the evening"}
            ]
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Sample React App</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <ul>
                    {this.state.notes.map((note) => {
                        return <li>
                            <strong>{note.title}</strong>
                            <p>{note.description}</p>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

export default App;
