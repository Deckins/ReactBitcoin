import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';


const user = ({params}) => {
    return (
        <h1>Welcome User {params.username}</h1>
    )
}

class App extends Component {
    state = {
        loggedIn: false
    }

    onClick = () => {
        this.setState(prevState => ({
            loggedIn: !prevState.loggedIn
        }));
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" exact render={
                        () => {
                            return (<h1>Welcome Home</h1>);
                        }
                    }/>
                    
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/welcome/john'>John</Link>
                        </li>
                        <input type="button" value={this.state.loggedIn ? 'log out' : 'log in'} onClick={this.onClick}/>
                    </ul>

                    <Route path='/welcome/:username' render={
                        ({match}) => (
                            this.state.loggedIn ? (<user username={match.params.username}/>) : (<Redirect to='/'/>)

                        )}
                    />
                </div>
            </Router>
        );
    }
}

export default App;
