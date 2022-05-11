import React from "react";

class CityInput extends React.Component {
  render() {
    const {passedState, func, maxlength} = this.props;
    return (
      <label>
        Insira sua cidade:
        <input type="text" name="city" value={passedState} onChange={func} maxLength={maxlength} />
      </label>
    );
  }
}

export default CityInput;