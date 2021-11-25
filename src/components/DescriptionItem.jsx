import React, { Component } from 'react'

export default class DescriptionItem extends Component {
  
  render() {
    const { data: { category, type, sample, inputName }, changeState, itemValue} = this.props;
    
    return (
      <div>
        <label>
          <h3>{ category }</h3>
          <input
            type={ type }
            placeholder={ sample }
            onChange={ changeState }
            name={ inputName }
            value={itemValue}
          />
        </label>
      </div>
    )
  }
}
