import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExercisesContainer from '../pages/ExercisesContainer'
import ExerciseNewContainer from '../pages/ExerciseNewContainer'
import NotFound from '../pages/404'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/exercise/new" component={ExerciseNewContainer} />
            <Route exact path="/other" component={NotFound}/>
            <Route component={ExercisesContainer} />
        </Switch>
    </BrowserRouter>
)

export default App