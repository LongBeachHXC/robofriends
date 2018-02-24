import React from 'react';
import CardList from './cardlist';
import SearchBox from './searchbox';
import { robots } from './robots';

const state = {
    robots: robots,
    searchfield: ''
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots:robots,
            searchfield:''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }


    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()
        )})
        return (
            <div className= 'tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        )
    };

}

export default App;