import React from 'react';
import ReactDOM from 'react-dom';
import { updatePerson } from './actions/creators';


export default class MyForm extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    console.log('MyForm render currentPerson', this.props.currentPerson);
    return (
      <section className="box">
        <header className="boxHeader">
          <h2>Test form with flux</h2>
        </header>
        <form onSubmit={this.onSubmit}>
          <div className="boxContent">
            <div className="formField">
              <label>Nom : </label>
              <input type="text" placeholder="Votre nom ..."
                value={this.props.currentPerson.name} onChange={this.onAttrChange('name')}
              />
            </div>
            <div className="formField">
              <label>Age : </label>
              <input type="number" placeholder="Votre age ..."
                value={this.props.currentPerson.age} onChange={this.onAttrChange('age')}
              />
            </div>
          </div>
          <div className="boxContent">
            <input type="submit"
              value="Enregister"/>
          </div>
        </form>
      </section>
    );
  }

  onAttrChange(key) {
    return e => {
      updatePerson(key, e.target.value);
    };
  }

  onSubmit() {
    //e.preventDefault();
    alert('onSubmit hit with : ' + JSON.stringify(this.props.currentPerson));
  }
}


MyForm.propTypes = {
  currentPerson: React.PropTypes.object.isRequired
};
