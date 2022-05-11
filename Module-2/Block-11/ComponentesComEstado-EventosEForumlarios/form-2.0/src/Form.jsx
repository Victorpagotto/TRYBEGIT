import React from "react";
import './form.css';
import AdressInput from "./formfields/AdressInput";
import CityInput from "./formfields/CityInput";
import CPFInput from "./formfields/CPFInput";
import EmailInput from "./formfields/EmailInput";
import NameInput from "./formfields/NameInput";
import ResumeSummaryInput from "./formfields/ResumeSummaryInput";
import RoleInput from "./formfields/RoleInput";
import RoleDescription from "./formfields/RoleDescription";
import StateInput from "./formfields/StateInput";
import TypeInput from "./formfields/TypeInput";
import SubmiteButton from "./SubmiteButton";
import ClearButton from "./ClearButton";

class Form extends React.Component {
  state = {
    name: '',
    email: '',
    cpf: '',
    adress: '',
    city: '',
    state: 'Acre',
    type: '',
    resumeSummary: '',
    role: '',
    roleDescription: '',
    status: false,
  }

  handleState = ({target: {value, name}}) => {
    this.setState({[name]: value});
  }

  createDiv = (theState) => {
    return (
      <div className="resultDiv">
        {Object.entries(theState).map((key) => {
          return <p>{key[0]}: {key[1]}</p>
        })}
      </div>
    );
  }

  setStatus = (status) => {
    this.setState({status: status});
  }

  clearState = () => {
    this.setState({
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      state: 'Acre',
      type: '',
      resumeSummary: '',
      role: '',
      roleDescription: '',
      status: false,
    })
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <NameInput func={this.handleState} passedState={this.state.name} maxlength={40} />
            <EmailInput func={this.handleState} passedState={this.state.email} maxlength={50} />
            <CPFInput func={this.handleState} passedState={this.state.cpf} maxlength={11} />
            <AdressInput func={this.handleState} passedState={this.state.adress} maxlength={200} />
            <CityInput func={this.handleState} passedState={this.state.city} maxlength={28} />
            <StateInput func={this.handleState} passedState={this.state.state} />
            <TypeInput func={this.handleState} passedState={this.state.type} />
          </fieldset>
          <fieldset>
            <ResumeSummaryInput func={this.handleState} passedState={this.state.resumeSummary} maxlength={1000} />
            <RoleInput func={this.handleState} passedState={this.state.role} maxlength={40} />
            <RoleDescription func={this.handleState} passedState={this.state.roleDescription} maxlength={500} />
          </fieldset>
          <SubmiteButton func={() => this.createDiv(this.state)} status={this.state.status} setStatus={this.setStatus} parentState={this.state}/>
      </form>
      <ClearButton clearState={() => this.clearState()} />
      </div>
    );
  }
}

export default Form;