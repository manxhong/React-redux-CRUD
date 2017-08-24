import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from "./components/course/ManageCoursePage";
import AuthorAdminPage from "./components/author/AuthorAdminPage";
import EditAuthorPage from "./components/author/EditAuthorPage";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="authors" component={AuthorAdminPage}/>
    <Route path="authors/:id" component={AuthorAdminPage}/>
    <Route path="author/:id" component={EditAuthorPage}/>
    <Route path="author" component={EditAuthorPage}/>
    <Route path="courses" component={CoursesPage}/>
    <Route path="course" component={ManageCoursePage}/>
    <Route path="course/:id" component={ManageCoursePage}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);
