/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import {loadCourses} from "./actions/courseActions";
import {loadAuthors} from "./actions/authorActions";
import configureStore from './store/configureStore.dev';
import {Provider} from 'react-redux';
import  routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
