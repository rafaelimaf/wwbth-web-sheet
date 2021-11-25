import React, { Component } from 'react'

export default class Attribute extends Component {
  isAttributeNegativo = () => {
    let { itemValue } = this.props;
    console.log(itemValue)
  }

  render() {
    const { data: { atribute }, changeState, itemValue } = this.props;
    return (
      <div>
        <label>
          <h3>{atribute}</h3>
          <input
            type="number"
            onChange={ changeState }
            name={ atribute }
            value={ itemValue }
          />
          <input
            type="number"
            value={ itemValue * 2 }
          />
        </label>
      </div>
    )
  }
}
