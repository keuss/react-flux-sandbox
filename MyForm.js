import React from 'react';
import ReactDOM from 'react-dom';
import { updatePerson, updatePersonList } from './actions/creators';


export default class MyForm extends React.Component {
  constructor(props) {
    super(props);

    this.addPerson = this.addPerson.bind(this);
  }

  render() {
    console.log('MyForm render props', this.props);
    return (
      <section className="box">
        <header className="boxHeader">
          <h2>Test form with flux</h2>
        </header>
        <form className="person-from">
          <div className="boxContent">
            <div className="formField">
              <label>Nom : </label>
              <input type="text" placeholder="Votre nom ..."
              />
            </div>
            <div className="formField">
              <label>Age : </label>
              <input type="number" placeholder="Votre age ..."
              />
            </div>
          </div>
          <div className="boxContent">
            <button id="addBtn" type="button">Ajouter</button>
          </div>
        </form>
      </section>
    );
  }

  onAttrChange(key) {
    // TODO use key param !
  }

  addPerson() {
    // TODO
  }

  renderAllPersons(personList) {
    // TODO return html ...
  }

}


MyForm.propTypes = {
  currentPerson: React.PropTypes.object.isRequired,
  personList: React.PropTypes.array.isRequired
};
