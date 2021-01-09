import React from 'react';
import './App.css';
import Header from "./Header.js";
import Sidebar from "./Sidebar.js"
import Chat from "./Chat.js"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        //BEM naming convention
        <div className="app">
            <Router>
                <Header/>
                <div className="app__body">
                    <Sidebar/>

                    <Switch>
                        <Route path="/channel/:channelId">
                            <Chat/>
                        </Route>
                        <Route path="/">
                            <h1>Welcome</h1>
                        </Route>
                    </Switch>
                    {/*Step 3. React-Router -> Chat Screen*/}
                </div>
            </Router>
        </div>
    );
}

export default App;
