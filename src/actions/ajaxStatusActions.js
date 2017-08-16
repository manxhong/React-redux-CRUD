import * as types from './actionTypes';

export function beginAjaxCall(){
  return {type: types.BEGIN_AJAX_CALL};
}

export function createAuthorError() {
  return {type: types.CREATE_AUTHOR_ERROR};
}

export function createCourseError() {
  return {type: types.CREATE_COURSE_ERROR};
}
