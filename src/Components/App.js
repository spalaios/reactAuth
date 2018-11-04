import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NutritionPlan from './NutrititonPlan';
import UserJourney from './UserJourney';
import PrivateRoute from './PrivateRoute';
import Default from './Default';
import Login from './SignIn';
const App = () => {
  return ( 
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        {/* <Route path="/nutritionplan" component={NutritionPlan} exact /> */}
        {/* <Route path="/userjourney" component={UserJourney} exact /> */}
        <PrivateRoute path="/default" exact component={Default} />
        <PrivateRoute path="/nutritionplan" exact component={NutritionPlan} />
        <PrivateRoute path="/userjourney" exact component={UserJourney} />
      </Switch>
    </BrowserRouter>
   );
}
 
export default App;