import React, { Component } from 'react'
import VitalSheetItem from './VitalSheetItem'
import vitalSheetData from '../data/vitalData'
import '../styles/VitalSheet.css';

export default class VitalSheet extends Component {
  constructor() {
    super()
    this.state = {
      PA: '0/0',
      PM: '0/0',
      Carga: '0/0',
      Vida: '0/0',
      Armadura: '0/0',
      Iventario: '',
      Conditions: '',
      Vantagens: '',
      Talentos: '',
      Mutacoes: '',
    }
  }

  componentDidMount() {
    this.renderRecoveredData()
  }

  componentDidUpdate() {
    localStorage.setItem('Vital Data', JSON.stringify(this.state));
  }

  renderRecoveredData = () => {
    const recoveredData = JSON.parse(localStorage.getItem('Vital Data'));
    this.setState({...recoveredData})
  }

  handleChanger = ({target: {value, name}}) => {
    this.setState({
      [name]: value,
    })
  }

  render() {
    const {
      Iventario,
      Vida,
      Armadura,
      Conditions,
      Vantagens,
      Talentos,
      Mutacoes
    } = this.state;
    return (
      <div className="vital-sheet">
        <h2 className="vital-sheet-title">Atributos Vitais</h2>
        <section className="vital-sheet-status">
          <div className="life-sheet">
            <h3 className="life-title">Vida</h3>
            <input
              type="text"
              name='Vida'
              onChange={ this.handleChanger }
              value={ Vida }
              className="life-input"
            />
          </div>
          <div className="armor-sheet">
          <h3 className="armor-title">Armadura</h3>
            <input
              type="text"
              name='Armadura'
              onChange={ this.handleChanger }
              value={ Armadura }
              className="armor-input"
            />
          </div>
        </section>
        <section className="action-attributes">
          {vitalSheetData.map((item, index) => (
            <VitalSheetItem
              data={item}
              key={index}
              changeState={this.handleChanger}
              itemValue={this.state[item.attribute]}
            />
          ))}
        </section>
        <h3 className="inventory-title">Iventário</h3>
        <div className="inventory-area">
          <textarea
            name='Iventario'
            id=""
            cols="30"
            rows="5"
            onChange={this.handleChanger}
            value={ Iventario }
            className="inventory"
            placeholder=" - Nome do Item | Peso: X { Descrição }"
          >
            { Iventario }
          </textarea>
        </div>
        <h3 className="condition-title">Condições</h3>
        <div className="condition-area">
          <textarea
            name='Conditions'
            id=""
            cols="30"
            rows="5"
            onChange={this.handleChanger}
            value={ Conditions }
            className="conditions"
            placeholder="- Atordoado { X Rodadas }; "
          >
            { Iventario }
          </textarea>
        </div>
        <h3 className="condition-title">Vantagens</h3>
        <div className="condition-area">
          <textarea
            name='Conditions'
            id=""
            cols="30"
            rows="5"
            onChange={this.handleChanger}
            value={ Vantagens }
            className="conditions"
            placeholder="- Vantagem:: Descrição; "
          >
            { Vantagens }
          </textarea>
        </div>
        <h3 className="condition-title">Talentos</h3>
        <div className="condition-area">
          <textarea
            name='Conditions'
            id=""
            cols="30"
            rows="5"
            onChange={this.handleChanger}
            value={ Talentos }
            className="conditions"
            placeholder="- Talento:: Descrição; "
          >
            { Talentos }
          </textarea>
        </div>
        <h3 className="condition-title">Mutações</h3>
        <div className="condition-area">
          <textarea
            name='Conditions'
            id=""
            cols="30"
            rows="5"
            onChange={this.handleChanger}
            value={ Mutacoes }
            className="conditions"
            placeholder="- Vantagem:: Descrição; "
          >
            { Mutacoes }
          </textarea>
        </div>
      </div>
    )
  }
}
