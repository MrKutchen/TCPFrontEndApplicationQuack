import React from 'react';
import "./Login.css";
import { Button } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import { auth, provider } from './firebase';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user:result.user
                })
            })
            .catch((error) =>{
                alert(error.message)
            });
    };
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://images.unsplash.com/photo-1465153690352-10c1b29577f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8MXx8ZHVja3x8MHx8fA&ixlib=rb-1.2.1&q=80&w=1080" alt=""/>

                <h1>Sign in to QUACK</h1>
                <p>Quack Demo</p>
                <Button onClick={signIn}>Sign in with Google</Button>

            </div>

        </div>
    )
}

export default Login;
