import React, { Component } from 'react'
import DescriptionSheet from '../components/DescriptionSheet'
import AttributesSheet from '../components/AttributesSheet'
import '../styles/Home.css'
import VitalSheet from '../components/VitalSheet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SkillSheet from '../components/SkillSheet'

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
        <section className="second-sheets">
          <SkillSheet />
        </section>
        <Footer />
      </main>
    )
  }
}
