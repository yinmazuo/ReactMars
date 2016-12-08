import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as V2EXAction from '../actions/V2EXAction'
import V2EX from '../components/V2EX'

class V2EXC extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <V2EX {...this.props} />
    )
  }
}


const mapStateToProps = (state) => {
	return {store: state.V2EX};
};

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(V2EXAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(V2EXC);

V2EXC.propTypes = {
  children: PropTypes.any
};
