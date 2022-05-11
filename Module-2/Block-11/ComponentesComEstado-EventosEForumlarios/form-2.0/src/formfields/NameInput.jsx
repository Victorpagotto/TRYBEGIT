import React from "react";

class NameInput extends React.Component {
  render() {
    const {passedState, func, maxlength} = this.props;
    return (
      <label>
        Insira seu nome:
        <input type="text" name="name" value={passedState} onChange={func} maxLength={maxlength} required />
    </label>
    );
  }
}

export default NameInput;