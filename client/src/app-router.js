import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import {DomainEntryForm} from './views/domain-entry-form';
import {DomainTable} from './views/domain-table';
import {NavigationTabs} from './views/navigation-tabs';

function Index() {
  return <h2>Home</h2>;
}

function AppRouter() {
  return (
    <Router>
      <NavigationTabs/>
      <Route path="/" exact component={Index} />
      <Route path="/domain-form" component={DomainEntryForm} />
      <Route path="/domain-table" component={DomainTable} />
    </Router>
  );
}

export default AppRouter;