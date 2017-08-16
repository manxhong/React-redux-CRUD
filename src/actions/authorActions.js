import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi';
import {beginAjaxCall, createAuthorError} from "./ajaxStatusActions";

export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function createAuthorSuccess(author) {
  return {type: types.CREATE_AUTHOR_SUCCESS, author};
}

export function deleteAuthorSuccess(author) {
  return {type: types.DELETE_AUTHOR_SUCCESS, author};
}

export function saveAuthor(author) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return authorApi.saveAuthor(author).then(savedAuthor=>{dispatch(createAuthorSuccess(savedAuthor));
    }).catch(error=>{
      dispatch(createAuthorError());
      throw (error);
    });
  };
}

export function deleteAuthorAction(author) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return authorApi.deleteAuthor(author.id).then(author => {
      dispatch(deleteAuthorSuccess(author));
    }).catch(error => {
      throw (error);
    });
  };
}

export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return authorApi.getAllAuthors().then(authors =>{
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error=>{
      throw (error);
    });
  };
}
