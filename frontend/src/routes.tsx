import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Jurados from './Pages/Jurado/Jurado'
import Patinadores  from './Pages/Patinador/Patinador'


const Routes: React.FC = () => {
    return (
         <Switch>
             <Route path="/" exact component={Home} />
             <Route path="/patinadores" component={Patinadores} />
             <Route path="/jurados" component={Jurados} />
         </Switch>
     )
 }
 
 export default Routes
