import React from "react";

export const TodoFiltersView = ({ classes, onAll, onActive, onCompleted }) => (
  <ul className="filters">
    <li>
      <a className={classes.all} onClick={onAll}>
        All
      </a>
    </li>
    <span> </span>
    <li>
      <a className={classes.active} onClick={onActive}>
        Active
      </a>
    </li>
    <li>
      <a className={classes.completed} onClick={onCompleted}>
        Completed
      </a>
    </li>
  </ul>
);
