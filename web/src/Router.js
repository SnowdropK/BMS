import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Admin from './Admin'
import Login from './pages/Login'
import Home from './pages/Home'

import Button from './pages/UI/Button'
import Modal from './pages/UI/Modal'
import Select from './pages/UI/Select'
import Tabel from './pages/UI/Tabel'
import TimePicker from './pages/UI/TimePicker'
import Carousel from './pages/UI/Carousel'

import FormLogin from './pages/form/login'
import FormReg from './pages/form/reg'
import RichText from './pages/RichText'

export default class ERouter extends React.Component{

    render(){

      return (
        <HashRouter>
            <Switch>
              <Route path="/login" component={Login}/> 
              <Route path='/' render={() => 
                <Admin>
                  <Switch>
                    <Route path='/home' component={Home}/>
                    {/* AntD组件二次封装 */}
                    <Route path='/AntdPackage/Button' component={Button}/>
                    <Route path='/AntdPackage/Modal' component={Modal}/>
                    <Route path='/AntdPackage/Select/:menuName' component={Select}/>
                    <Route path='/AntdPackage/Tabel' component={Tabel}/>
                    <Route path='/AntdPackage/TimePicker' component={TimePicker}/>
                    <Route path='/AntdPackage/Carousel' component={Carousel}/>
                    {/* 表单 */}
                    <Route path='/form/login' component={FormLogin}/>
                    <Route path='/form/reg' component={FormReg}/>
                    {/* 富文本 */}
                    <Route path='/RichText' component={RichText}/>
                    <Redirect to="/home" />
                  </Switch>
                </Admin>
              }/>
            </Switch>
        </HashRouter>
      )
    }
}