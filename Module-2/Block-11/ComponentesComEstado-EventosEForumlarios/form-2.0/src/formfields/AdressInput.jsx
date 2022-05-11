import React from "react";

class AdressInput extends React.Component {
  render() {
    const {passedState, func, maxlength} = this.props;
    return(
      <label>
        Insira seu endereço:
        <input type="text" name="adress" value={passedState} onChange={func} maxLength={maxlength} required />
      </label>
    );
  }
}

export default AdressInput;