import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ZhihuNewsAction from '../actions/ZhihuNewsAction'
import ZhihuNews from '../components/ZhihuNews'

class ZhihuNewsC extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ZhihuNews {...this.props} />
    )
  }
}


const mapStateToProps = (state) => {
	return {store: state.ZhihuNews};
};

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(ZhihuNewsAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ZhihuNewsC);

ZhihuNewsC.propTypes = {
  children: PropTypes.any
};
