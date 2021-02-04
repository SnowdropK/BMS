import React from 'react'
import { Row, Col } from 'antd'
import NavLeft from './components/NavLeft'
import Header from './components/Header'

import './style/common.less'

export default class Admin extends React.Component {

  render() {
    return (
      <Row className="container">
        <Col span="3" className="nav-left">
          <NavLeft/>
        </Col>
        <Col span="21" className="main">
          <Header/>
          <div className="content">
            {this.props.children}
          </div>
          {/* <Footer/> */}
        </Col>
      </Row>
    )
  }
}