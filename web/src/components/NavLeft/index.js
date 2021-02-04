import React from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import MenuConfig from './../../config/menuConfig'
import './index.less'
const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component {

  constructor(props){
    super(props)
    this.state = {
    }
  }

  handleHomeClick = () => {

  }

  /**
   * 获取树形菜单节点
   * @param {*} treeList 
   */
  renderMenuTreeNode(treeList) {
    return treeList.map(item => {
      if(item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenuTreeNode(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      )
    })
  }

  render() {
    return (
      <div>
        <NavLink to="/home" onClick={this.handleHomeClick}>
          <div className="title">
            <h1>后台管理系统</h1>
          </div>
        </NavLink>
        <Menu
          theme="dark"
        >
          {this.renderMenuTreeNode(MenuConfig)}
        </Menu>
      </div>
    )
  }
}