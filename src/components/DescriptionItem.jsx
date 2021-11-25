import React, { Component } from 'react'
import '../styles/DescriptionSheet.css';

export default class DescriptionItem extends Component {
  
  render() {
    const { data: { category, type, sample, inputName }, changeState, itemValue} = this.props;
    
    return (
      <div>
        <label>
          <h3 className="category-title">{ category }</h3>
          <input
            type={ type }
            placeholder={ sample }
            onChange={ changeState }
            name={ inputName }
            value={itemValue}
            className="category-input"
          />
        </label>
      </div>
    )
  }
}
