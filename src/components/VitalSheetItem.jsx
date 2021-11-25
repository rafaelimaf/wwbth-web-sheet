import React, { Component } from 'react'

export default class VitalSheetItem extends Component {
  render() {
    const {data: { attribute }, changeState, itemValue } = this.props;
    return (
      <div className="action-item">
        <h3 className="action-item-title">{ attribute }</h3>
        <input
          type="text"
          onChange={ changeState }
          name={ attribute }
          value={ itemValue }
          className="action-input"
        />
      </div>
    )
  }
}
