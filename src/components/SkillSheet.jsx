import React, { Component } from 'react'
import FirstSkillItem from './FirstSkillItem'
import FourthSkillItem from './FourthSkillItem';
import ParrySkillItem from './ParrySkill';
import SecondSkillItem from './SecondSkillItem';
import ThirdSkillItem from './ThirdSkillItem';
import ThrowSkillItem from './ThrowSkill';
import UnharmedSkillSkillItem from './UnharmedSkill';
import '../styles/SkillSheet.css'
import TreatmentSkillItem from './TreatmentSkill.jsx';
import FirstReactionItem from './FirstReactionItem';
import SecondReactionItem from './SecondReactionItem';

export default class SkillSheet extends Component {
  
  onClickCreateSkill = () => {
    const skillsRoot = document.querySelector('.skill-items');
    const newSkill = document.createElement('div');
    skillsRoot.appendChild(newSkill);
  }

  render() {
    return (
      <div className="skill-items">
        <div className="char-skills">
        <h2 className="skills-title">Poderes Habilidades e Equipamentos</h2>
          <h3 className="made-skills-title">Habilidades de Ação</h3>
          <FirstSkillItem />
          <SecondSkillItem />
          <ThirdSkillItem />
          <FourthSkillItem />
          <br />
          <ThrowSkillItem />
          <UnharmedSkillSkillItem />
        </div>
        <div className="default-skills">
          <h3 className="default-skills-title">Habilidades de Reação</h3>
          <FirstReactionItem />
          <SecondReactionItem />
          <br />
          <ParrySkillItem />
          <TreatmentSkillItem />
        </div>
      </div>
    )
  }
}
