import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './containers/App';
import scrollMagic from './containers/Scrollmagic';
import Slick from './containers/SlickCarousel';
import NanoScroll from './containers/NanoScroll';
import Canvas from './containers/Canvas';
import SortTableTest from './containers/SortTableTest';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/home" component={App} >
      </Route>

      <Route path="/scrollMagic" component={scrollMagic} >
      </Route>

      <Route path="/slick" component={Slick} >
      </Route>

      <Route path="/nanoScroll" component={NanoScroll} >
      </Route>

      <Route path="/canvas" component={Canvas} >
      </Route>

      <Route path="/sortTableTest" component={SortTableTest} >
      </Route>

    </Router>
  </Provider>,
  document.getElementById('app')
);
