import React, { Component } from 'react'
import skillsSheetData from '../data/skillsData'
import '../styles/SkillItem.css'

export default class TreatmentSkillItem extends Component {
  constructor() {
    super()
    this.state = {
      Descritivo:'',
      Pericia: '',
      Modificadores: '',
      Custo: '',
      Teste: '',
      CD: '',
      Efeito: '',
    }
  }

  componentDidMount() {
    this.renderRecoveredData()
  }

  componentDidUpdate() {
    localStorage.setItem('Treatment Reaction Data', JSON.stringify(this.state));
  }

  renderRecoveredData = () => {
    const recoveredData = JSON.parse(localStorage.getItem('Treatment Reaction Data'));
    this.setState({...recoveredData})
  }

  handleChanger = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div className="skill-item">
        {skillsSheetData.map((item, index) => (
          <input 
            type="text"
            key={ index }
            placeholder={ item.treatmentCategories }
            name={ item.treatmentCategories }
            onChange={ this.handleChanger }
            value={ this.state[item.treatmentCategories] }
            className="skill-input"
          />
        ))}
      </div>
    )
  }
}
