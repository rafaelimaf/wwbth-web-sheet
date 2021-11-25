import React, { Component } from 'react'
import DescriptionSheet from '../components/DescriptionSheet'
import AttributesSheet from '../components/AttributesSheet'
import '../styles/Home.css'
import VitalSheet from '../components/VitalSheet'

export default class Home extends Component {
  render() {
    return (
      <div className="wwbth-sheets">
        <div className="first-sheets">
          <DescriptionSheet />
          <div>
            <VitalSheet />
            <AttributesSheet />
          </div>
        </div>
      </div>
    )
  }
}
