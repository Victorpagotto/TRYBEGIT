import React from "react";

class RoleInput extends React.Component {
  render() {
    const {passedState, func, maxlength} = this.props;
    return (
      <label>
        Insira seu cargo:
        <input type="text" name="role" value={passedState} onChange={func} maxLength={maxlength} required />
      </label>
    );
  }
}

export default RoleInput;