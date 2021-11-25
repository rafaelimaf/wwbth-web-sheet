import React, { Component } from 'react'
import DescriptionSheet from '../components/DescriptionSheet'
import AttributesSheet from '../components/AttributesSheet'
import '../styles/Home.css'
import VitalSheet from '../components/VitalSheet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SkillItem from '../components/SkillItem'
import SkillsSheet from '../components/SkillsSheet'

export default class Home extends Component {

  onClickAddSkillsSheet = () => {

  }

  onClickRemoveSkillsSheet = () => {

  }

  render() {
    return (
      <main className="wwbth-sheets">
        <Header />
        <section className="first-sheets">
          <DescriptionSheet />
          <div>
            <VitalSheet />
            <AttributesSheet />
          </div>
        </section>
        <section className="skill-sheet">
          <h2 className="skill-sheet-title">Poderes Habilidades e Equipamentos</h2>
          <SkillsSheet />
        </section>
        <Footer />
      </main>
    )
  }
}
