import React from "react";

class StateInput extends React.Component {
  render() {
    const {passedState, func} = this.props;
    const brazilianStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];
    return (
      <label>
        Insira seu estado:
        <select name="state" value={passedState} onChange={func}required >
        {brazilianStates.map((state) => {
          return <option value={state}>{state}</option>
        })}
        </select>
  </label>
    );
  }
}

export default StateInput;