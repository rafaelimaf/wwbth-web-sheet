import React, { Component } from 'react'
import '../styles/AttributesSheet.css'

export default class Attribute extends Component {
  isAttributeNegativo = () => {
    let { itemValue } = this.props;
    console.log(itemValue)
  }

  render() {
    const { data: { attribute }, changeState, itemValue } = this.props;
    return (
      <div className="attributes-sheet-item">
        <h3 className="attribute-title">{attribute}</h3>
        <input
          id="attribute-value"
          className="attribute-input"
          type="number"
          onChange={ changeState }
          name={ attribute }
          value={ itemValue }
        />
      </div>
    )
  }
}
