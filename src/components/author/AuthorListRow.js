import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const AuthorListRow = ({author}) =>{
  return (
    <tr>
      <td><Link to={'/authors/' + author.id}>Delete</Link></td>
      <td><Link to={'/author/' + author.id}>{author.id}</Link></td>
      <td>{author.firstName + " " + author.lastName}</td>
    </tr>
  );
};

AuthorListRow.propTypes ={
  author: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default AuthorListRow;
