import React from "react";

class ClearButton extends React.Component {
  render() {
    const {clearState} = this.props;
    return (
      <button onClick={clearState} className="submiteButton" >Limpar</button>
    )
  }
}

export default ClearButton;