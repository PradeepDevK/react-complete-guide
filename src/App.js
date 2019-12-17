import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [personsState, setPersonsState] = useState({
    person: [
      { name: 'Raj', age: 29 },
      { name: 'Raji', age: 27 },
      { name: 'Raju', age: 28 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  const [showPersonState, setShowPersonState] = useState({
    showPersons: false
  });

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    // alert('Was Clicked!');
    // Do Not Do This: this.state.person[0].name = "Pradeep";
    setPersonsState({
      person: [
        { name: newName, age: 29 },
        { name: 'Pratheep', age: 27 },
        { name: 'Pradip', age: 28 }
      ]
    });
  };

  const nameChangedHandler = (event) => {
    // alert('Was Clicked!');
    // Do Not Do This: this.state.person[0].name = "Pradeep";
    setPersonsState({
      person: [
        { name: 'Pradeep', age: 29 },
        { name: event.target.value, age: 27 },
        { name: 'Pradip', age: 28 }
      ]
    });
  };

  const togglePersonsHandler = () => {
    let doesShow = showPersonState.showPersons;
    setShowPersonState({
      showPersons: !doesShow
    });
  }

  let persons = null;

  if (showPersonState.showPersons) {
    persons = (
      <div >
        <Person
          name={personsState.person[0].name}
          age={personsState.person[0].age} />
        <Person
          name={personsState.person[1].name}
          age={personsState.person[1].age} click={switchNameHandler.bind(this, "PradeepRaj")}
          changed={nameChangedHandler}>My Hobbies : Racing </Person>
        <Person
          name={personsState.person[2].name}
          age={personsState.person[2].age} />
      </div>
    );
  } 
  
  const style = {
    backgroudColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };


  return (
    <div className="App">
      <h1>Hi, I'm a react app.</h1>
      <p>This is really working..</p>
      {/* <button
        style={style}
        onClick={() => switchNameHandler("Pradeep!")}>Switch Name</button> */}
      <button
        style={style}
        onClick={() => togglePersonsHandler()}>Toggle Persons</button>

      {/* <div >
        <Person
          name={personsState.person[0].name}
          age={personsState.person[0].age} />
        <Person
          name={personsState.person[1].name}
          age={personsState.person[1].age} click={switchNameHandler.bind(this, "PradeepRaj")}
          changed={nameChangedHandler}>My Hobbies : Racing </Person>
        <Person
          name={personsState.person[2].name}
          age={personsState.person[2].age} />
      </div> */}

      {persons}
    </div>
  );

  /**
   * JSX
   */
  //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I\'m a react app.'))
}

export default app;