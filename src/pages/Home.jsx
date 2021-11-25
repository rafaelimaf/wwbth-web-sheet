import React, { Component } from 'react'
import DescriptionSheet from '../components/DescriptionSheet'
import AttributesSheet from '../components/AttributesSheet'

export default class Home extends Component {
  render() {
    return (
      <div>
        <DescriptionSheet />
        <AttributesSheet />
      </div>
    )
  }
}
