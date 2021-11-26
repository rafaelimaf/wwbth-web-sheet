import React, { Component } from 'react'
import skillsSheetData from '../data/skillsData'
import '../styles/SkillItem.css'

export default class SkillItem extends Component {
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
      skillNumber: 1,
    }
  }

  componentDidMount() {
    this.renderRecoveredData()
  }

  componentDidUpdate() {
    const { skillNumber } = this.state;
    localStorage.setItem(`Skill Data ${skillNumber}`, JSON.stringify(this.state));
  }

  renderRecoveredData = () => {
    const { skillNumber } = this.state;
    const recoveredData = JSON.parse(localStorage.getItem(`Skill Data ${skillNumber}`));
    this.setState({...recoveredData})
  }

  handleChanger = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    })
  }

  onClickRemoveSkill = ({ target }) => {
    target.parentElement.remove()
  }

  render() {
    return (
      <div className="skill-item">
        <button
          onClick={ this.onClickRemoveSkill }
        >
          -
        </button>
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
