import React, { Component } from 'react'
import '../styles/Header.css'

export default class Header extends Component {
  render() {
    return (
      <header className="wwbth-sheet-header">
        <h1 className="header-title">WWBTH | Ficha de Personagem</h1>
        <h3 className="header-subtitle">{`All Rights Reserved to Rafael de Lima | Copia não comédia :]`}</h3>
      </header>
    )
  }
}
