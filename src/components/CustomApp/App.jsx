import React from 'react';
import Header from '../HeaderComponents/Header';
import SearchBox from '../SearchBoxComponent/Searchbox';
import './App.css'


class App extends React.Component {
    state = {
        headerText: "Name it Webapp"
    }

    render() {
        return (<div>
            <Header headTitle={this.state.headerText} />
            <SearchBox />
        </div>)
    }
}

//? Example of functional Component
// function App() {
//     return <h1>This is my functional component </h1>
// }

export default App;