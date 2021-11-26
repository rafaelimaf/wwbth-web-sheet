import React, { Component } from 'react'
import SkillItem from './SkillItem'

export default class SkillItems extends Component {
  
  onClickCreateSkill = () => {
    const skillsRoot = document.querySelector('.skill-items');
    const newSkill = document.createElement('div');
    skillsRoot.appendChild(newSkill);
  }

  render() {
    return (
      <div className="skill-items">
        <SkillItem />
        <button
          onClick={ this.onClickCreateSkill }
        >
          +
        </button>
      </div>
    )
  }
}
