import React, { Component } from 'react'
import SkillItem from './SkillItem'

export default class SkillsSheet extends Component {
  render() {
    return (
      <div className="skill-items">
        <button className="remove-skill-btn">-</button>
        <SkillItem />
        <button className="add-skill-btn">+</button>
      </div>
    )
  }
}
