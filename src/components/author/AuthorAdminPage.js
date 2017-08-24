import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as authorActions from '../../actions/authorActions';
import AuthorList from './AuthorList';
import toastr from 'toastr'
import {Link} from 'react-router';

class AuthorAdminPage extends React.Component {

    constructor(props, context) {
      super(props, context);

      this.redirectToEditAuthorPage = this.redirectToEditAuthorPage.bind(this);
    }

    redirectToEditAuthorPage(){
      browserHistory.push('/author');
    }

  componentWillReceiveProps(nextProps){

    if(this.props.authors.length != nextProps.authors.length){
      //Necessary to populate form when existing course is loaded directly
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

    deleteAuthor(author, event) {
      event.preventDefault();
      this.props.actions.deleteAuthorAction(author)
        .then(()=>toastr.success('Deleted Author'));
    }

    render()
    {
        const {authors} = this.props;
        return (
          <div>
            <h1>Authors</h1>
            <input
              type="submit"
              value="Add Author"
              className="btn btn-primary"
              onClick={this.redirectToEditAuthorPage}
            />
            <br/>
            <br/>
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
                  <td><a href="#" onClick={this.deleteAuthor.bind(this,author)}>Delete</a></td>
                  <td><Link to={'/author/' + author.id}>{author.id}</Link></td>
                  <td>{author.firstName + " " + author.lastName}</td>
                </tr>
              )}
              </tbody>
            </table>
          </div>
        );
    }
}

AuthorAdminPage.propTypes = {
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {

  return {
        authors: state.authors,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authorActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorAdminPage);
