import React from 'react'
import { Select } from 'antd'
import './index.less'

const Option = Select.Option

export function DropDownSelect(props) {
  let { optionList, ...rests } = props
  return (
    <Select 
      allowClear
      placeholder="请选择忍者"
      {...rests}
    >
      {(optionList || []).map(item => <Option key={item.key} vlaue={item.key}>{item.label}</Option>)}
    </Select>
  )
}

export function SearchInputSelect(props) {
  let { optionList, ...rests } = props
  return (
    <Select 
      allowClear
      showSearch 
      placeholder="请选择忍者"
      optionFilterProp="children"
      filterOption={(input, option) =>
        {
          //return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          return option.children.toLowerCase().includes(input.toLowerCase())
        }
      }
      {...rests}
    >
      {(optionList || []).map(item => <Option key={item.key} vlaue={item.key}>{item.label}</Option>)}
    </Select>
  )
}