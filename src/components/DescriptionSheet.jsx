import React, { Component } from 'react'
import DescriptionItem from './DescriptionItem'
import descriptionItemData from '../data/descriptionData'

export default class DescriptionSheet extends Component {
  constructor() {
    super()
    this.state = {
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
    }
  }

  handleChanger = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <h2>Ficha Descritiva</h2>
        {descriptionItemData.map((data, index) => (
          <DescriptionItem
            data={data}
            key={index}
            changeState={this.handleChanger}
          />
        ))}
      </div>
    )
  }
}
