import React from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'

import './index.less'
const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component {

  HandleHomeClick = () => {

  }

  render() {
    return (
      <div>
        <div to="/home" onClick={this.HandleHomeClick}>
          <div className="logo">
              <h1>后台管理系统</h1>
          </div>
        </div>
      </div>
    )
  }
}