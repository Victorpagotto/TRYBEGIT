import React from "react";

class CPFInput extends React.Component {
  render() {
    const {passedState, func, maxlength} = this.props;
    return (
      <label>
        Insira seu CPF:
        <input type="text" name="cpf" value={passedState} onChange={func} maxLength={maxlength} required />
    </label>
    );
  }
}

export default CPFInput;