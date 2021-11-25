import React, { Component } from 'react'
import AtributeItem from './AttributeItem'
import attributeSheetData from '../data/attributeData'

export default class AttributeSheet extends Component {
  constructor() {
    super()
    this.state = {
      FOR: 0,
      VON: 0,
      DES: 0,
      AGI: 0,
      PRE: 0,
      INT: 0,
    }
  }

  componentDidMount() {
    this.renderRecoveredData()
  }

  componentDidUpdate() {
    localStorage.setItem('Attribute Data', JSON.stringify(this.state));
  }

  renderRecoveredData = () => {
    const recoveredData = JSON.parse(localStorage.getItem('Attribute Data'));
    this.setState({...recoveredData})
  }

  handleChanger = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="attributes-sheet">
      <h2 className="attributes-sheet-title">Atributos Básicos</h2>
      <div className="attributes-sheet-items">
        {attributeSheetData.map((item, index) => (
          <AtributeItem
            data={ item }
            key={ index }
            changeState={ this.handleChanger }
            itemValue={this.state[item.atribute]}
          />
        ))}
      </div>
      </div>
    )
  }
}
