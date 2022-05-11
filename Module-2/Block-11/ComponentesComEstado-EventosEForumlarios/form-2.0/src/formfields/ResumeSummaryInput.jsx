import React from "react";

class ResumeSummaryInput extends React.Component {
  render() {
    const {passedState, func, maxlength} = this.props;
    return (
      <label>
        Insira seu resumo de currículo:
        <textarea name="resumeSummary" cols="30" rows="10" value={passedState} onChange={func} maxLength={maxlength} required ></textarea>
    </label>
    );
  }
}

export default ResumeSummaryInput;