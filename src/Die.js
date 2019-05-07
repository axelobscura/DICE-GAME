import React, {Component} from 'react';
import "./Die.css";

class Die extends Component{
  render(){
    let cls = `Die fas fa-dice-${this.props.face}`;
    return (
      <div>
        <i className={cls} />
      </div>
    )
  }
}

export default Die;