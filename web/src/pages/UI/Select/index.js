import React from 'react'
import { Card, Switch } from 'antd'
import { DropDownSelect, SearchInputSelect } from './../../../components/AntdPackage/Select'
import { OPTION_LIST } from './../../../mock'

import './index.less'

const DEFAULT_SELECT_VALUE = {
  'dropDownSelectValue': "Naruto",
  'searchInputSelectValue': "Sasuke",
  'searchInputMultipleSelectValue': ["Sasuke"]
}

export default class AntdPackage extends React.Component {

  state = {
    switchChecked: true,
    dropDownSelectValue: DEFAULT_SELECT_VALUE['dropDownSelectValue'],
    searchInputSelectValue: DEFAULT_SELECT_VALUE['searchInputSelectValue'],
    searchInputMultipleSelectValue: DEFAULT_SELECT_VALUE['searchInputMultipleSelectValue'],
  }

  /**
   * Switch组件修改值
   */
  onSwitchChange = (switchChecked) => {
    let nextSate = {switchChecked}
    //true：选中默认值；false：清空所有选项
    nextSate.dropDownSelectValue = switchChecked ? DEFAULT_SELECT_VALUE['dropDownSelectValue'] : null
    nextSate.searchInputSelectValue = switchChecked ? DEFAULT_SELECT_VALUE['searchInputSelectValue'] : null
    nextSate.searchInputMultipleSelectValue = switchChecked ? DEFAULT_SELECT_VALUE['searchInputMultipleSelectValue'] : []
    this.setState(nextSate)
  }

  onSelectChange = (field, optionKey, option) => {
    this.setState({
      [field]: optionKey
    })
  }
  
  render(){
    let { switchChecked, dropDownSelectValue, searchInputSelectValue, searchInputMultipleSelectValue } = this.state
    return (
      <React.Fragment>
        <Switch checked={switchChecked} checkedChildren="选中默认值" unCheckedChildren="清空值" onChange={this.onSwitchChange} />
        <Card title="下拉单选框" className="mt-20">
          <DropDownSelect 
            className="select" 
            value={dropDownSelectValue} 
            optionList={OPTION_LIST} 
            onChange={this.onSelectChange.bind(this,'dropDownSelectValue')}
          />
        </Card>
        <Card title="下拉搜索选择框" className="mt-20">
          <span>搜索单选：
            <SearchInputSelect 
              className="select" 
              value={searchInputSelectValue} 
              optionList={OPTION_LIST} 
              onChange={this.onSelectChange.bind(this,'searchInputSelectValue')}
            />
          </span>
          <span className="ml-20">搜索多选：
            <SearchInputSelect 
              mode="multiple" 
              className="select select-multiple" 
              value={searchInputMultipleSelectValue} 
              optionList={OPTION_LIST} 
              onChange={this.onSelectChange.bind(this,'searchInputMultipleSelectValue')}
            />
          </span>
        </Card>
      </React.Fragment>
    )
  }
}