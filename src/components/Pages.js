import React from 'react';
import Quiz from './Quiz';
import HomePage from './HomePage';
import { Route, Switch } from 'react-router-dom'; 


function Pages() {
  return (
    <div>
     <Switch>
        <Route path="/throne" render={(props) =><Quiz name={'Throne of glass'} color={'green'}/>}/>
        <Route path="/harry" component={(props) =><Quiz name={'Harry Potter'} color={'indigo'}/>}/>
        <Route path="/twilight" render={(props) =><Quiz name={'Twilight'} color={'gray'}/>}/>
        <Route path="/hunger" render={(props) =><Quiz name={'The Hunger Games'} color={'red'}/>}/>
        <Route path="/" exact render={(props) =><HomePage/>}/>
    </Switch>
    </div>
  );
}

export default Pages;