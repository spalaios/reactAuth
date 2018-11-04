import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import fakeAuth from './fakeAuth';





const PrivateRoute = ({component: Component, ...rest}) => {
    return ( 
        <Route {...rest} 
            render={(props) => {
            //    return (fakeAuth.isAuthenticated) ? ( <Component {...props} /> ) : ( <Redirect to={`/?${props.location.pathname.split('/')[1]}`} /> )
            return (fakeAuth.isAuthenticated) ? ( <Component {...props} /> ) : ( <Redirect to={{pathname: "/", state: { from: props.location }}} /> )
                // <Component {...props} /
            }}
        
        />
     );
}
 
export default PrivateRoute;