import React, { Component } from 'react'

export default class SkillInputs extends Component {
  render() {
    const { data: { category }, changeState, itemValue } = this.props;
    return (
      <div>
        <input
          type="text"
          onChange={changeState}
          value={ itemValue }
          placeholder={ category }
          name={ category }
          className="skill-inputs"
        />
      </div>
    )
  }
}
