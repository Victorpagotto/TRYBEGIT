import React from "react";

class EmailInput extends React.Component {
  render() {
    const {passedState, func, maxlength} = this.props;
    return (
      <label>
        Insira seu e-mail:
        <input type="email" name="email" value={passedState} onChange={func} maxLength={maxlength} required />
    </label>
    );
  }
}

export default EmailInput;