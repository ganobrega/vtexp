import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Grommet
import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';

// Variables
import Routes from './routes';


export default () => (
  <Router>
    <Grommet theme={grommet} full>
      <Switch>
        {Routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <>
                  <Component />
                </>
              </CSSTransition>
            )}
          </Route>
        ))}
      </Switch>
    </Grommet>
  </Router>
);
