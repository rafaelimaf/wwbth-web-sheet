import React, { Component } from 'react'
import skillsSheetData from '../data/skillsData'
import '../styles/SkillItem.css'

export default class UnharmedSkillSkillItem extends Component {
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

  render() {
    return (
      <div className="skill-item">
        {skillsSheetData.map((item, index) => (
          <input 
            type="text"
            key={ index }
            placeholder={ item.unarmedCategories }
            name={ item.category }
            className="skill-input"
          />
        ))}
      </div>
    )
  }
}
