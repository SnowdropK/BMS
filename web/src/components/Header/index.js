import React from 'react'
import { Row, Col } from 'antd'
import Util from '../../utils/utils'
import axios from './../../axios'

import './index.less'

export default class Header extends React.Component {

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

  // 默认请求我们的接口数据
  requestList = ()=>{
    let _this = this;
    axios.ajax({
      url: '/open_city',
      data:{
        params: {page:this.params.page}
      }
    }).then((res)=>{
        let list = res.list
        this.setState({list})
    })
  }

  render() {
    return (
      <div className="header">
        <Row className="header-title">
          <Col span={24}>
            <span style={{marginRight: 5}} >{this.state.userName}</span>
            <a href="#">退出</a>
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