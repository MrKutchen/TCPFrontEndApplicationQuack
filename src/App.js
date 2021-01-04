import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Header from "./components/header/Header.js";
import Sidebar from "./components/sidebar/Sidebar.js";

class App extends Component {
    render() {
        return (
            //BEM naming convention
            <div className="app">
                <Router>
                    <h1>...let's build QUACK</h1>
                    <Header/>
                    <div className="app__body">
                        <Route path="/" component={Sidebar}/>
                        {/*Step 2. Build Side Bar*/}
                        {/*Step 3. React-Router -> Chat Screen*/}
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
