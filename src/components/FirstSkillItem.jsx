import React, { Component } from 'react'
import skillsSheetData from '../data/skillsData'
import '../styles/SkillItem.css'

export default class FirstSkillItem extends Component {
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
    localStorage.setItem('First Skill Data', JSON.stringify(this.state));
  }

  renderRecoveredData = () => {
    const recoveredData = JSON.parse(localStorage.getItem('First Skill Data'));
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
            placeholder={ item.category }
            name={ item.category }
            value={ this.state[item.category] }
            onChange={ this.handleChanger }
            className="skill-input"
          />
        ))}
      </div>
    )
  }
}
