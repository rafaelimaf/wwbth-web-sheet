import React, { Component } from 'react'
import expertiseData from '../data/expertiseData'
import ExpertiseItem from './ExpertiseItem'
import '../styles/ExpertiseSheet.css'

export default class ExpertiseSheet extends Component {
  constructor() {
    super()
    this.state = {
      cac: '',
      cad: '',
      luta: '',
      furtividade: '',
      acrobacia: '',
      indimidacao: '',
      persuasao: '',
      bloqueio: '',
      esquiva: '',
      atletismo: '',
      percepcao: '',
      pontaria: '',
      constituicao: '',
      intuicao: '',
      tecnologia: '',
      investigacao: '',
      prestidigitacao: '',
      direcao: '',
      oficio: ''
    }
  }

  componentDidMount() {
    this.renderRecoveredData()
  }

  componentDidUpdate() {
    localStorage.setItem('Expertise Data', JSON.stringify(this.state));
  }

  renderRecoveredData = () => {
    const recoveredData = JSON.parse(localStorage.getItem('Expertise Data'));
    this.setState({...recoveredData})
  }

  handleChanger = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="expertise-sheet">
      <h2 className="expertise-sheet-title">Perícias</h2>
      <div className="expertise-sheet-items">
        {expertiseData.map((item, index) => (
          <ExpertiseItem
            data={ item }
            key={ index }
            changeState={ this.handleChanger }
            itemValue={this.state[item.name]}
          />
        ))}
      </div>
      </div>
    )
  }
}
