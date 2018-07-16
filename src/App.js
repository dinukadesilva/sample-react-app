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
            ],
            newNote: {
                title: "",
                description: ""
            }
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
                <input
                    type="text"
                    onChange={(event) => {
                        this.setState({
                            ...this.state,
                            newNote: {
                                ...this.state.newNote,
                                title: event.target.value
                            }
                        })
                    }}
                    value={this.state.newNote.title}
                    placeholder="Title"
                />

                <input
                    type="text"
                    onChange={(event) => {
                        this.setState({
                            ...this.state,
                            newNote: {
                                ...this.state.newNote,
                                description: event.target.value
                            }
                        })
                    }}
                    value={this.state.newNote.description}
                    placeholder="Description"
                />

                <button
                    onClick={() => {
                        this.setState({
                            ...this.state,
                            notes: [
                                ...this.state.notes,
                                this.state.newNote
                            ],
                            newNote: {
                                title: "",
                                description: ""
                            }
                        })
                    }}
                >
                    Add
                </button>

                <ul className="notes-list">
                    {this.state.notes.map((note) => {
                        return <li className="notes-list-item">
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
