import React from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import MenuConfig from './../../config/menuConfig'
import { connect } from 'react-redux'
import { switchMenu } from './../../redux/action'
import './index.less'

const SubMenu = Menu.SubMenu;

class NavLeft extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      currentMenuKey: ''
    }
  }

  /**
   * 跳转至首页
   */
  handleHomeClick = () => {
    const { dispatch } = this.props
    dispatch(switchMenu('首页'))
  } 

  handleMenuClick = ({item, key}) => {
    if (key === this.state.currentMenuKey) {
      return false;
    }

    // 事件派发，自动调用reducer，通过reducer保存到store对象中
    const { dispatch } = this.props;
    dispatch(switchMenu(item.props.title));

    this.setState({
        currentKey: key
    });
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
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={`${item.key}/${item.title}`}>{item.title}</NavLink>
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
          onClick={this.handleMenuClick}
        >
          {this.renderMenuTreeNode(MenuConfig)}
        </Menu>
      </div>
    )
  }
}

export default connect()(NavLeft)