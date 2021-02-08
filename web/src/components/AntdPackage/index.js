import React from 'react'
import { Card } from 'antd'

import './common.less'

export default class ComponentShow extends React.Component{

  render(){

    return (
      <React.Fragment>
        <Card title="Select 选择器" className="card-wrap">

        </Card>
        <Card title="" className="card-wrap">展示</Card>
        <Card title="" className="card-wrap">展示</Card>
      </React.Fragment>
    )
  }
}