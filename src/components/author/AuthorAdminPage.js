import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as authorActions from '../../actions/authorActions';
import AuthorList from './AuthorList';
import toastr from 'toastr'

class AuthorAdminPage extends React.Component {

    constructor(props, context) {
      super(props, context);
      this.redirectToEditAuthorPage = this.redirectToEditAuthorPage.bind(this);
    }

    redirectToEditAuthorPage(){
      browserHistory.push('/author');
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
            <AuthorList authors={authors}/>
          </div>
        );
    }
}

AuthorAdminPage.propTypes = {
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
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
