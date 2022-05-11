import React from "react";

class RoleDescription extends React.Component {
  render() {
    const {passedState, func, maxlength} = this.props;
    return (
      <label>
        Insira seu resumo de currículo:
        <textarea name="roleDescription" cols="30" rows="10" value={passedState} onChange={func} maxLength={maxlength} required ></textarea>
      </label>
    );
  }
}

export default RoleDescription;