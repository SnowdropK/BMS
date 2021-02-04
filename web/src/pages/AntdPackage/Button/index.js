import React from 'react'
import { Card, Button } from 'antd'

import './../common.less'
import './index.less'

export default class AntdPackage extends React.Component {
  
  render(){
    return (
      <div>
        <Card title="基础按钮" className="card-wrap">
          <Button type="primary">Imooc</Button>
        </Card>
        <Card title="基础按钮" className="card-wrap">
          <Button type="primary">Imooc</Button>
        </Card>
      </div>
    )
  }
}