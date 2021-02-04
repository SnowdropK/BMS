import React from 'react'

import './index.less'

export default class Home extends React.Component {

  state = {

  }

  componentDidMount(){
    console.log('首恶')
  }

  render() {
    return (
      <div className="home-wrap">这里是首页</div>
    )
  }
}