import React from "react";
import { BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import {DomainEntryForm} from './views/domain-entry-form';
import {DomainTable} from './views/domain-table';
import {NavigationTabs} from './views/navigation-tabs';

function AppRouter() {
  return (
    <Router>
      <NavigationTabs/>
      <Route path="/" exact render={<Redirect to="/domain-table" />} />
      <Route path="/domain-form" component={DomainEntryForm} />
      <Route path="/domain-table" component={DomainTable} />
    </Router>
  );
}

export default AppRouter;