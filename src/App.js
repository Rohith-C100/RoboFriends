import React, { Component } from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import { render } from '@testing-library/react';
import Scroll from "./Scroll.js";
import ErrorBoundary from "./ErrorBoundary.js";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    OnsearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if (!robots.length) {
            return <h1>loading</h1>
        }
        else {
            return (
                <div className="tc">
                    <h1 className='f1 own'>Robofriends</h1>
                    <SearchBox searchChange={this.OnsearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <Cardlist robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;