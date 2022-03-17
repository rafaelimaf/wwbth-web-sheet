import React, { Component } from 'react'

export default class ExpertiseItem extends Component {
  isAttributeNegativo = () => {
    let { itemValue } = this.props;
    console.log(itemValue)
  }

  render() {
    const { data: { attribute, name }, changeState, itemValue } = this.props;
    return (
      <div className="expertise-sheet-item">
        <h3 className="expertise-title">{attribute}</h3>
        <input
          id="expertise-value"
          className="expertise-input"
          type="text"
          onChange={ changeState }
          name={ name }
          value={ itemValue }
          placeholder='+X'
        />
      </div>
    )
  }
}
