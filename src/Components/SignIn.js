import React from 'react';
import fakeAuth from './fakeAuth';
import _ from 'lodash';


const Login = ({history}) => {
    console.log(history);
    function handleLogin() {
        fakeAuth.isAuthenticated = true;
        console.log(fakeAuth);
        //get the search term and redirect it accordingly or deffault
        const { state } = history.location;

        if(!_.isEmpty(state)) {
            const { pathname } = state.from;
            history.push(pathname);
        }else {
            history.push('/default');
        }
        //state not empty means its redirected from somewhere
        //else default
    }

    return ( 
        <div>
            <div>Sign in </div>
            <button type="button" className="btn" onClick={handleLogin}>Login</button>
        </div>
     );
}
 
export default Login;