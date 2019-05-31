import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
  	const {score, name, doScore, description} = this.props;
  	const disabled = score === undefined;
    return (
      <tr className={`RuleRow RuleRow-${ disabled ? "active" : "disabled"}`} 
      		onClick={disabled ? doScore :null}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{disabled ? description :  score}</td>
      </tr>
    )
  }
}

export default RuleRow;