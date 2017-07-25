import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setVisibilityFilter } from '../../../../redux/visibilityFilter/actions';
import Layout from './layout';

class FilterLink extends Component {
  handleClick = () => {
    this.props.dispatch(setVisibilityFilter(this.props.filter))
  }

  render() {
    return(
      <Layout
        active={this.props.active}
        onClick={this.handleClick}
      >
        { this.props.children }
      </Layout>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

export default connect(mapStateToProps)(FilterLink);
