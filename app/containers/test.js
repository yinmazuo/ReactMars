import React, { Component, PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TestActions from '../actions/TestAction';
import '../style/index.scss'
import Modal from '../components/Modal'
import Button from '../components/Button'
import Icon from '../components/Icon'
import Dropdown from '../components/Dropdown'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

class Test extends Component {
  constructor(props) {
    super(props)
    this.showModal = () => {
      this.modal.open()
    }
    this.closeModal = () => {
      this.modal.close()
    }
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
    // <button onClick={this.showModal}>button</button>
    // <Modal {...modalProps}>
    //   <Modal.Header>
    //     <h2>模态框头部.</h2>
    //   </Modal.Header>
    //   <Modal.Body>
    //     <p>内容</p>
    //   </Modal.Body>
    //   <Modal.Footer>
    //     <Button size='sm' styleType='info'>
    //       <Icon name={'shield'} rotate={180} style={{color: '#fff'}}></Icon>
    //     </Button>
    //   </Modal.Footer>
    // </Modal>
    // <Dropdown styleType={'primary'} items={['test 1', 'test 2', 'test 3']} />
    return (
      <div style={{height: '100%', width: '100%'}}>
        <Header />
        <Sidebar items={[{location: '/1', text: 'Github', icon: 'app/img/github.png'},
                        {location:'/2', text:'test2'},
                        {location:'./3', text:'test3'}]}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {store: state.test};
};

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(TestActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);

Test.propTypes = {
  children: PropTypes.any
};
