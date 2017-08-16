import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import numAjaxCallsInProgress from './ajaxStatusReducer';
import {alertsReducer} from 'react-redux';

const rootReducer = combineReducers({
  courses,
  authors,
  numAjaxCallsInProgress
});

export default rootReducer;
