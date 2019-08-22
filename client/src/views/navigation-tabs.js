import { Link } from "react-router-dom";
import React from "react";
import styles from './navigation-tabs.module.scss';

export const NavigationTabs = () =>
<nav className={styles.navigationTabs}>
  <ul className={styles.navigationTabList}>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/domain-form">Domain Form</Link>
    </li>
    <li>
      <Link to="/domain-table">Domain Table</Link>
    </li>
  </ul>
</nav>;
