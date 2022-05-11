import React from "react";

class TypeInput extends React.Component {
  render() {
    const {func} = this.props;
    return (
      <label className="radial">
        Escola o tipo (apartamento, casa, etc):
        <div className="radialIntern">
          <label>Apartamento</label>
          <input type="radio" name="type" value='Aparamento' onChange={func} required />
        </div>
        <div className="radialIntern">
          <label>Casa</label>
          <input type="radio" name="type" value='Casa' onChange={func} required />
        </div>
        <div className="radialIntern">
          <label>República</label>
          <input type="radio" name="type" value='Republica' onChange={func} required />
        </div>
      </label>
    );
  }
}

export default TypeInput;