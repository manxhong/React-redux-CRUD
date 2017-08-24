import React, {PropTypes} from 'react';
import AuthorListRow from'./AuthorListRow';
import {Link} from 'react-router';

const AuthorList = ({authors})=> {

  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>ID</th>
        <th>Name</th>
      </tr>
      </thead>
      <tbody>
      {authors.map(author =>
        <tr key={author.id}>
          <td><Link to={'/authors/' + author.id}>Delete</Link></td>
          <td><Link to={'/author/' + author.id}>{author.id}</Link></td>
          <td>{author.firstName + " " + author.lastName}</td>
        </tr>
      )}
      </tbody>
    </table>
  );
};


AuthorList.propTypes = {
  authors: PropTypes.array.isRequired
};

export default AuthorList;
