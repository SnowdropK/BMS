import React from 'react'
// import * as React from 'react'
import { Card, Button } from 'antd'

import './index.less'

export default class AntdPackage extends React.Component  {

  handleClick = (data) => {
    console.log(data)
  }
  
  render(){
    return (
      <div>
        <Card title="基础按钮" className="card-wrap">
          <Button type="primary" onClick={this.handleClick}>Imooc</Button>
        </Card>
        <Card title="基础按钮" className="card-wrap">
          <Button type="primary">Imooc</Button>
        </Card>
      </div>
    )
  }
}