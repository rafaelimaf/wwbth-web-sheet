import React, { Component } from 'react'
import DescriptionItem from './DescriptionItem'
import descriptionItemData from '../data/descriptionData'
import '../styles/DescriptionSheet.css'

export default class DescriptionSheet extends Component {
  constructor() {
    super()
    this.state = {
      userNp: '',
      userName: '',
      userOcupation: '',
      userAge: '',
      userBorn: '',
      userGender: '',
      userBornPlace: '',
      userLivePlace: '',
      userFolks: '',
      userFavPeople: '',
      userFavObjects: '',
      userFavPlaces: '',
      userConflicts: ''
    }
  }

  componentDidMount() {
    this.renderRecoveredData()
  }

  componentDidUpdate() {
    localStorage.setItem('Description Data', JSON.stringify(this.state));
  }

  renderRecoveredData = () => {
    const recoveredData = JSON.parse(localStorage.getItem('Description Data'));
    this.setState({...recoveredData})
  }
  
  handleChanger = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    })
  }


  render() {
    return (
      <div className="description-sheet">
      <h2 className="description-sheet-title">Ficha Descritiva</h2>
        {descriptionItemData.map((item, index) => (
          <DescriptionItem
          data={item}
          key={index}
          changeState={this.handleChanger}
          itemValue={this.state[item.inputName]}
          />
          ))}
      </div>
    )
  }
}
