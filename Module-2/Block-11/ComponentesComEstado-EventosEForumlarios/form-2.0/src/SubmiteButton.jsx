import React from "react";
import './form.css';

class SubmiteButton extends React.Component {
  verifyState (state) {
    const values = Object.values(state);
  for (let x in values) {
    if (values[x] === '') return false;
  }
  return true;
  }
  render() {
    const {setStatus, func, status, parentState} = this.props;
    if(status === false) {
      return (
        <button className="submiteButton" onClick={() => setStatus(this.verifyState (parentState))}>Submite</button>
      );
    }
    return func();
  }
}

export default SubmiteButton;