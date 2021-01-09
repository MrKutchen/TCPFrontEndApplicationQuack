import React from 'react';
import './App.css';
import Header from "./Header.js";
import Sidebar from "./Sidebar.js"
import Chat from "./Chat.js"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
    // const [user, setUser] = useState(null);
    const [{user}, dispatch] = useStateValue();

    return (
        //BEM naming convention
        <div className="app">
            <Router>
                {!user ? (
                    <Login />
                ) : (
                    <>

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
                        </div>
                    </>
                )}

            </Router>
        </div>
    );
}

export default App;
