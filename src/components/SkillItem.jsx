import React, { Component } from 'react'
import SkillInputs from './SkillInputs'
import skillsSheetData from '../data/skillsData'
import '../styles/SkillSheet.css'

export default class SkillItem extends Component {
  constructor() {
    super()
    this.state = {
      Descritivo: '',
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
    localStorage.setItem('Skills Data', JSON.stringify(this.state));
  }

  renderRecoveredData = () => {
    const recoveredData = JSON.parse(localStorage.getItem('Skills Data'));
    this.setState({...recoveredData})
  }
  
  handleChanger = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="skill-categories">
        {skillsSheetData.map((item, index) => (
          <SkillInputs
            data={ item }
            key={ index }
            changeState={this.handleChanger}
            itemValue={this.state[item.category]}
          />
          ))}
      </div>
    )
  }
}
