import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDot from './LoadingDot';

const Header = ({loading})=> {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/authors" activeClassName="active">Author</Link>
      {" | "}
      <Link to="/courses" activeClassName="active">Course</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {loading && <LoadingDot interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
