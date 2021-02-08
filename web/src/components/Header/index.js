import React from 'react'
import { Row, Col } from 'antd'
import Util from '../../utils/utils'
import axios from './../../axios'
import avatarPic from '../../img/panghu.png';
import { connect } from 'react-redux'

import './index.less'

class Header extends React.Component {

  state = {
    userName: '宇智波胖虎',
    sysTime: Util.formateDate(new Date().getTime()),
    dayPictureUrl: '',
    weather: null
  }

  componentDidMount() {
    this.getSysTime()
    this.getWeatherMessage()
  }

  getSysTime() {
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({
        sysTime
      })
    }, 1000)
  }

  getWeatherMessage(){
    const city = '杭州'
    const url = `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
    axios.jsonp({url}).then((res)=>{
      if(res.status === 'success'){
          let data = res.results[0].weather_data[0];
          this.setState({
              dayPictureUrl: data.dayPictureUrl,
              weather: data.weather
          })
      }
    })
  }

  // 默认请求接口数据
  // requestList = ()=>{
  //   let _this = this;
  //   axios.ajax({
  //     url: '/open_city',
  //     data:{
  //       params: {page:this.params.page}
  //     }
  //   }).then((res)=>{
  //       let list = res.list
  //       this.setState({list})
  //   })
  // }

  render() {
    return (
      <div className="header">
        <Row className="header-title">
          <Col span={24}>
            <img src={avatarPic} className="user-avatar mr-5" alt="" />
            <span className="mr-5">{this.state.userName}</span>
            {/* 
              如果没有属性 rel="noopener noreferrer"打开的页面的域名和当前页面的域名是在同一个域名下，
              在打开后的控制台输入window.opener.alert(1),上一个页面会弹出1 
            */}
            <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">退出</a>
          </Col>
        </Row>
        <div className="header-navigation">
          <div className="header-navigation-menu">{this.props.menuName || '首页'}</div>
          <div className="header-navigation-time">
            {this.state.sysTime || ''}
            <img src={this.state.dayPictureUrl} alt="" />
            <span>{this.state.weather}</span>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      menuName: state.menuName
  }
};

export default connect(mapStateToProps)(Header)