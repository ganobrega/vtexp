import React, { useEffect } from 'react';
import Reactotron from 'reactotron-react-js';

import parseUrl from 'url-parse';

// Grommet
import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

// Variables
import Routes from './routes';


Reactotron
  .configure()
  .connect();




export default (props) => {


  return (
    <Provider store={store}>
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
    </Provider>
  );
}
