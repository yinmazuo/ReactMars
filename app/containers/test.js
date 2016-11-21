import React, { Component, PropTypes } from 'react'
// import { Link, IndexLink } from 'react-router'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import '../style/index.scss'
import Modal from '../components/Modal'


export default class Test extends Component {
  constructor(props) {
    super(props)
    this.showModal = this.showModal.bind(this)
  }
  showModal() {
    this.modal.open()
  }

  render() {
    let modalProps = {
			key: 'modal',
			ref: (ref) => this.modal = ref,
			type: 'primary',
			size: 'sm',
			role: 'alert',
			//top: 100,
      //left: 100,
			hasMask: true,
			// onCancel: () => this.router.replace('/'),
			// onConfirm: () => this.router.replace('/test')
		};
    return (
      <div>
        <button onClick={this.showModal}>button</button>
        <Modal {...modalProps}>
          <Modal.Header>
            <h2>模态框头部.</h2>
          </Modal.Header>
          <Modal.Body>
            <p>内容</p>
          </Modal.Body>
          <Modal.Footer>
            <p>底部</p>
          </Modal.Footer>
				</Modal>
      </div>
    )
  }
}
Test.propTypes = {
  children: PropTypes.any
};
