import React from 'react';
import Reactotron from 'reactotron-react-js';
import parseUrl from 'url-parse';

// Grommet
import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

// Views
import Main from './views/Main';
import Fallback from './views/Fallback';

// Variables
import Constants from './services/constants';
import Routes from './routes';

Reactotron
  .configure()
  .connect();



export default () => {
  return (
    <Provider store={store}>
      <Router>
        <Grommet theme={grommet} full>
          {Routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </Grommet>
      </Router>
    </Provider>
  );
}
