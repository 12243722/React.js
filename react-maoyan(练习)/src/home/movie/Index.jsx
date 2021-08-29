import React, { Component, lazy, Suspense } from 'react';
import NavBar from './ui/NavBar';
import TabBar from './ui/TabBar.jsx';

import { Switch, Route, Redirect } from 'react-router-dom';

// import Hot from './hot/Index';
// import Cinema from './cinema/Index';
// import Wait from './wait/Index';
// import Classic from './classic/Index';

const Hot = lazy(() => import('./hot/Index'));
const Cinema = lazy(() => import('./cinema/Index'));
const Wait = lazy(() => import('./wait/Index'));
const Classic = lazy(() => import('./classic/Index'));

class Index extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <TabBar></TabBar> 
      
      <Suspense fallback={<div>loading........</div>}>
        <Switch>
           <Redirect from="/" to="/hot" exact></Redirect>
           <Route path="/hot">
              <Hot></Hot>
           </Route>
           <Route path="/cinema">
              <Cinema></Cinema>
           </Route>
           <Route path="/wait">
              <Wait></Wait>
           </Route>
           <Route path="/classic">
              <Classic></Classic>
           </Route>
         ++</Switch>
        </Suspense>    
      </div>
    );
  }
}

export default Index;