import React, { useEffect } from 'react';
import parseUrl from 'url-parse';
import Reactotron from 'reactotron-react-js';
import { CSSTransition } from 'react-transition-group';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// Grommet
import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Variables
import Routes from './routes';


Reactotron
  .configure()
  .connect();

global.Reactotron = Reactotron;


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
};
