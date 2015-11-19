import React from 'react';
import ReactDOM from 'react-dom';
import { updatePerson } from './actions/creators';


export default class MyForm extends React.Component {
  constructor(props) {
    super(props);

    this.addPerson = this.addPerson.bind(this);
  }

  render() {
    console.log('MyForm render currentPerson', this.props.currentPerson);
    return (
      <section className="box">
        <header className="boxHeader">
          <h2>Test form with flux</h2>
        </header>
        <form>
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
            <button id="addBtn" type="button" onClick={this.addPerson}>Ajouter</button>
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

  addPerson() {
    // play with type="submit" add e + e.preventDefault
    // e.preventDefault();
    alert('addPerson hit with : ' + JSON.stringify(this.props.currentPerson));
  }
}


MyForm.propTypes = {
  currentPerson: React.PropTypes.object.isRequired
};
