import * as types from './actionTypes';

export function beginAjaxCall(){
  return {type: types.BEGIN_AJAX_CALL};
}

export function createCourseError() {
  return {type: types.CREATE_COURSE_ERROR};
}
