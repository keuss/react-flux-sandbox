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
        { this.props.personList.length > 0 ? this.renderAllPersons(this.props.personList) : null }
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
    const newPerson = Object.assign({}, this.props.currentPerson);
    // alert('addPerson hit with : ' + JSON.stringify(newPerson));
    updatePersonList(newPerson);
    // NOK !?!
    // updatePersonList(this.props.currentPerson);
  }

  renderAllPersons(personList) {
    return (
      <ul>
        {personList.map( (pers, i) => <li key={i}>{pers.name} (Age : {pers.age})</li>)}
      </ul>
    );
  }

}


MyForm.propTypes = {
  currentPerson: React.PropTypes.object.isRequired,
  personList: React.PropTypes.array.isRequired
};
